const path = require('node:path');
const childProcess = require('node:child_process');
const util = require('node:util');
const fs = require('node:fs');

const hostPackageJSON = require('../package.json');

const {dependencies: hostDependencies, devDependencies: hostDevDependencies} = {
  ...hostPackageJSON,
};

const execSync = util.promisify(childProcess.exec);

const MODULES_PATH = ['@gumtracker'];

(async function main() {
  MODULES_PATH.forEach(async moduleName => {
    const modulePackageJSONPath = path.resolve(
      './src',
      moduleName,
      './package.json',
    );

    const modulePackageJSON = fs.readFileSync(modulePackageJSONPath, {
      encoding: 'utf-8',
    });

    const {dependencies: moduleDep, devDependencies: moduleDevDep} =
      JSON.parse(modulePackageJSON);

    // Only install dependencies in each modules that the host does not have
    const moduleDepToInstall = Object.fromEntries(
      Object.entries(moduleDep).filter(
        ([dep, v]) => Object.keys(hostDependencies).indexOf(dep) === -1,
      ),
    );

    const moduleDevDepToInstall = Object.fromEntries(
      Object.entries(moduleDevDep).filter(
        ([dep, v]) => Object.keys(hostDevDependencies).indexOf(dep) === -1,
      ),
    );

    // INSTALLATION
    console.info(
      `Installing dependencies module from ${moduleName}: \n -${Object.keys(
        moduleDepToInstall,
      ).join('\n -')}`,
    );

    let depToInstallCmd = 'npm i';
    let devDepToInstallCmd = 'npm i';

    Object.entries(moduleDepToInstall).forEach(([module, ver]) => {
      depToInstallCmd += ` ${module}@${ver}`;
    });

    depToInstallCmd += ' --legacy-peer-deps';

    console.log(depToInstallCmd);

    await execSync(depToInstallCmd);

    console.info(
      `Installing dev dependencies module from ${moduleName}: ${Object.keys(
        moduleDevDepToInstall,
      ).join('\n -')}`,
    );

    Object.entries(moduleDevDepToInstall).forEach(([module, ver]) => {
      devDepToInstallCmd += ` ${module}@${ver}`;
    });

    devDepToInstallCmd += '  --save-dev --legacy-peer-deps';

    await execSync(devDepToInstallCmd);

    console.info('Installing done.');
  });
})();
