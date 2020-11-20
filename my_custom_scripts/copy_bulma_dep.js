const fs = require('fs');
const npm_config = require('../package.json');

Object.keys(npm_config.dependencies).forEach(function(package_name) {
    // destination will be created or overwritten by default.
    package_file_name = package_name + '.min.js'
    src_package_file_path = './node_modules/' + package_name + '/dist/js/' + package_file_name, './static/js/' + package_file_name
    try {
        if (fs.existsSync(src_package_file_path)) {
            fs.copyFile(src_package_file_path, './static/js/' + package_file_name, (err) => {
                if (err) throw err;
                console.log('File was copied to destination');
            });
        }
      } catch(err) {
        console.error(err)
      }
  });