### A short selenium webdriver script for testing [this sample website](https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F)

---

Built with:

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white)

### Running locally

Use `npm install` in your local project directory to set up the selenium dependency.

Also make sure you have an executable driver for your browser that may be read by the program (though this particular test was done with a direct path to my MSEdge driver.exe). This path would need to be edited in the line below:

`const service = new edge.ServiceBuilder('path/to/your/driver.exe');`
