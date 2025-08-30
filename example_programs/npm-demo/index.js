/*steps:
To create package.json: npm init
    -default values: npm init -y
custom scripts: npm run <script_name>
standard scripts: npm <script_name>

install package: npm i <package_name>
install package for dev only: npm i -D <package name>

to install packages listed in the dependencies of the package.json files: npm install

version control: add ^ before version in package.json to ensure the major version is the same when downloading the package but you can update the minor or patch versions.
*/

const {format} = require('data-fns');

console.log(format(new Date(), 'MMM d y h:m'));

