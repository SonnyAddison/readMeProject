//A function to determin bades ased on license selection
badges = (license) => {
    if (license === 'AGPL License') {
        return '[![License: AGPL v3(https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    } else if (license === 'GPL License') {
        return '[![License: GPL v3(https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'LGPL License') {
        return '[![License: LGPL v3(https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    } else if (license === 'EPL License') {
        return '[![License: EPL(https://img.shields.io/badge/License-EPL-blue)](https://www.eclipse.org/legal/epl-v10.html)';
    } else if (license === 'Mozilla License') {    
        return '[![License: MPL 2.0(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (license === 'Apache License') {
        return '[![License: Appache(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'MIT License') {
        return '[![License: MIT(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Berkeley Source Distribution (BSD) License') {
        return '[![License: BSD(https://img.shields.io/badge/License-BSD-blue](https://opensource.org/licenses/BSD-3-Clause)';
    } else if (license === 'Unlicense') {
        return '[![License: Unlicense(https://img.shields.io/badge/License-Unlicense-blue)](http://unlicense.org/)';
    } else if (license === 'N/A') {
        return };
}

// export function
module.exports = badges;
