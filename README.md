# Namaste react

# Package.json

    <!-- "parcel": "^2.13.3"    ^=>stands for caret used to update parcel libray with minor update available-->
    <!-- "parcel": "~2.13.3"    ~=>stands for tilde used to update parcel libray with major update available-->
     <!-- Mostly prefer caret insted of tilde otherwise it affects our application sometime -->

# Parcel Bundler : used to create production ready build

- for more details: read parceljs documentation

* used to create Dev Build
* Create different dev and Prod build
  - Dev build command: npx parcel index.html
  - Prod build command: npx parcel build index.html
* used to create local server
* HMR (Hot Module Replacement) i.e. automatically refresh browser page content once we save updated code
  -- Parcel use File watching algorithm to watch any page changes by developer
* Caching -creates faster builds
* Image optimization
* Tree shaking: Remove unused code
* File Minification
* Bundling
* Compress files
* Consistent Hashing
* Code splitting
* Differential Bundling - means allow to support older browsers
* Good Error handling
* Diagnistic
* https: allow to host application on https e.g. "npx parcel index.html --https"

# BrowsersList

- In package.jsosn we can mention browser compatiblility of my application
