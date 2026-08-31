# Security Fix for Princegupta101/Learning-Management-System

Addresses 195 security finding(s).

## Changes Required

### Axios: Regular Expression Denial of Service (ReDoS) via Cookie Name Injection

- **File:** `Client/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)
- **Fix:** Update `axios` to version `1.16.0` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### Axios: Proxy-Authorization Credential Leak to Origin Server Across HTTP-to-HTTPS Redirect in Axios Node.js HTTP Adapter

- **File:** `Client/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-201](https://cwe.mitre.org/data/definitions/201.html)
- **Fix:** Update `axios` to version `1.16.0` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### Axios: Proxy-Authorization header leaks to redirect target when proxy is re-evaluated to direct connection

- **File:** `Client/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- **Fix:** Update `axios` to version `1.16.0` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### axios Vulnerable to Credential Theft and Response Hijacking via Prototype Pollution Gadget in Config Merge

- **File:** `Client/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-94](https://cwe.mitre.org/data/definitions/94.html)
- **Fix:** Update `axios` to version `1.15.2` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### axios Vulnerable to Full Man-in-the-Middle via Prototype Pollution Gadget in `config.proxy`

- **File:** `Client/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-441](https://cwe.mitre.org/data/definitions/441.html)
- **Fix:** Update `axios` to version `1.16.0` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### PostCSS: Path Traversal in Previous Source Map Auto-Loading (sourceMappingURL) leads to Arbitrary .map File Disclosure

- **File:** `Client/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-22](https://cwe.mitre.org/data/definitions/22.html)
- **Fix:** Update `postcss` to version `8.5.18` or later.

Run:
  npm update postcss  # For npm
  pip install --upgrade postcss  # For Python
  go get postcss@latest  # For Go

### PostCSS: Arbitrary file read and information disclosure via attacker-controlled sourceMappingURL in CSS comments

- **File:** `Client/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-22](https://cwe.mitre.org/data/definitions/22.html)
- **Fix:** Update `postcss` to version `8.5.12` or later.

Run:
  npm update postcss  # For npm
  pip install --upgrade postcss  # For Python
  go get postcss@latest  # For Go

### vite: `server.fs.deny` bypass on Windows alternate paths

- **File:** `Client/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-22](https://cwe.mitre.org/data/definitions/22.html)
- **Fix:** Update `vite` to version `8.0.16` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### launch-editor vulnerable to command injection via the crafted request on Windows

- **File:** `Client/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-77](https://cwe.mitre.org/data/definitions/77.html)
- **Fix:** Update `vite` to version `2.9.0` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### Cloudinary Node SDK is vulnerable to Arbitrary Argument Injection through parameters that include an ampersand

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-88](https://cwe.mitre.org/data/definitions/88.html)
- **Fix:** Update `cloudinary` to version `2.7.0` or later.

Run:
  npm update cloudinary  # For npm
  pip install --upgrade cloudinary  # For Python
  go get cloudinary@latest  # For Go

### Mongoose's Improper Sanitization of $nor in sanitizeFilter May Allow NoSQL Injection

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-74](https://cwe.mitre.org/data/definitions/74.html)
- **Fix:** Update `mongoose` to version `6.13.9` or later.

Run:
  npm update mongoose  # For npm
  pip install --upgrade mongoose  # For Python
  go get mongoose@latest  # For Go

### Mongoose search injection vulnerability

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-89](https://cwe.mitre.org/data/definitions/89.html)
- **Fix:** Update `mongoose` to version `8.8.3` or later.

Run:
  npm update mongoose  # For npm
  pip install --upgrade mongoose  # For Python
  go get mongoose@latest  # For Go

### Multer vulnerable to Denial of Service via deeply nested field names

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)
- **Fix:** Update `multer` to version `2.2.0` or later.

Run:
  npm update multer  # For npm
  pip install --upgrade multer  # For Python
  go get multer@latest  # For Go

### Multer Vulnerable to Denial of Service via Uncontrolled Recursion

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-674](https://cwe.mitre.org/data/definitions/674.html)
- **Fix:** Update `multer` to version `2.1.1` or later.

Run:
  npm update multer  # For npm
  pip install --upgrade multer  # For Python
  go get multer@latest  # For Go

### Multer vulnerable to Denial of Service via incomplete cleanup

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-459](https://cwe.mitre.org/data/definitions/459.html)
- **Fix:** Update `multer` to version `2.1.0` or later.

Run:
  npm update multer  # For npm
  pip install --upgrade multer  # For Python
  go get multer@latest  # For Go

### Multer vulnerable to Denial of Service via resource exhaustion

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-772](https://cwe.mitre.org/data/definitions/772.html)
- **Fix:** Update `multer` to version `2.1.0` or later.

Run:
  npm update multer  # For npm
  pip install --upgrade multer  # For Python
  go get multer@latest  # For Go

### Multer vulnerable to Denial of Service via unhandled exception from malformed request

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-248](https://cwe.mitre.org/data/definitions/248.html)
- **Fix:** Update `multer` to version `2.0.2` or later.

Run:
  npm update multer  # For npm
  pip install --upgrade multer  # For Python
  go get multer@latest  # For Go

### Multer vulnerable to Denial of Service via unhandled exception

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-248](https://cwe.mitre.org/data/definitions/248.html)
- **Fix:** Update `multer` to version `2.0.1` or later.

Run:
  npm update multer  # For npm
  pip install --upgrade multer  # For Python
  go get multer@latest  # For Go

### Multer vulnerable to Denial of Service from maliciously crafted requests

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-248](https://cwe.mitre.org/data/definitions/248.html)
- **Fix:** Update `multer` to version `2.0.0` or later.

Run:
  npm update multer  # For npm
  pip install --upgrade multer  # For Python
  go get multer@latest  # For Go

### Multer vulnerable to Denial of Service via memory leaks from unclosed streams

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-401](https://cwe.mitre.org/data/definitions/401.html)
- **Fix:** Update `multer` to version `2.0.0` or later.

Run:
  npm update multer  # For npm
  pip install --upgrade multer  # For Python
  go get multer@latest  # For Go

### Nodemailer: Message-level raw option bypasses disableFileAccess/disableUrlAccess, enabling arbitrary file read and full-response SSRF in the delivered message

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-73](https://cwe.mitre.org/data/definitions/73.html)
- **Fix:** Update `nodemailer` to version `9.0.1` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### Nodemailer’s addressparser is vulnerable to DoS caused by recursive calls

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-703](https://cwe.mitre.org/data/definitions/703.html)
- **Fix:** Update `nodemailer` to version `7.0.11` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### Duplicate Advisory: Nodemailer: Email to an unintended domain can occur due to Interpretation Conflict

- **File:** `Server/package.json`
- **Severity:** HIGH
- **CWE:** [CWE-436](https://cwe.mitre.org/data/definitions/436.html)
- **Fix:** Update `nodemailer` to version `7.0.7` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### react: Gatsby is a free and open source framework based on React that helps developers build websites and a

- **File:** `Client/package.json`
- **Severity:** HIGH
- **Fix:** Check NVD for patch information: https://nvd.nist.gov/vuln/detail/CVE-2023-22491

### Axios: Nested axios option objects can consume polluted prototype values

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-1321](https://cwe.mitre.org/data/definitions/1321.html)
- **Fix:** Update `axios` to version `0.33.0` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### Axios: Prototype pollution gadgets can alter axios request construction

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-1321](https://cwe.mitre.org/data/definitions/1321.html)
- **Fix:** Update `axios` to version `1.18.0` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### Axios: Excessive recursion in formDataToJSON can cause denial of service

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)
- **Fix:** Update `axios` to version `0.33.0` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### Axios: Deep formToJSON Key Recursion Can Cause Denial of Service

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)
- **Fix:** Update `axios` to version `0.33.0` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### axios has DoS & Header Injection via Prototype Pollution Read-Side Gadgets in axios merge functions

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-1321](https://cwe.mitre.org/data/definitions/1321.html)
- **Fix:** Update `axios` to version `1.16.0` or later.

Run:
  npm update axios  # For npm
  pip install --upgrade axios  # For Python
  go get axios@latest  # For Go

### Withdrawn Advisory: eslint has a Stack Overflow when serializing objects with circular references

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-674](https://cwe.mitre.org/data/definitions/674.html)
- **Fix:** Update `eslint` to version `9.26.0` or later.

Run:
  npm update eslint  # For npm
  pip install --upgrade eslint  # For Python
  go get eslint@latest  # For Go

### PostCSS: incomplete fix of GHSA-6g55-p6wh-862q — attacker-controlled sourceMappingURL reads arbitrary .map files when `from` is unset

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-22](https://cwe.mitre.org/data/definitions/22.html)
- **Fix:** Update `postcss` to version `8.5.23` or later.

Run:
  npm update postcss  # For npm
  pip install --upgrade postcss  # For Python
  go get postcss@latest  # For Go

### PostCSS has XSS via Unescaped </style> in its CSS Stringify Output

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-79](https://cwe.mitre.org/data/definitions/79.html)
- **Fix:** Update `postcss` to version `8.5.10` or later.

Run:
  npm update postcss  # For npm
  pip install --upgrade postcss  # For Python
  go get postcss@latest  # For Go

### launch-editor: NTLMv2 hash disclosure via UNC path handling on Windows

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-73](https://cwe.mitre.org/data/definitions/73.html)
- **Fix:** Update `vite` to version `2.14.1` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### Vite Vulnerable to Path Traversal in Optimized Deps `.map` Handling

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-22](https://cwe.mitre.org/data/definitions/22.html)
- **Fix:** Update `vite` to version `8.0.5` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### Vite's server.fs.deny bypassed with /. for files under project root

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-22](https://cwe.mitre.org/data/definitions/22.html)
- **Fix:** Update `vite` to version `6.3.4` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### Vite has an `server.fs.deny` bypass with an invalid `request-target`

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- **Fix:** Update `vite` to version `6.2.6` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### Vite allows server.fs.deny to be bypassed with .svg or relative paths

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- **Fix:** Update `vite` to version `6.2.5` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### Vite has a `server.fs.deny` bypassed for `inline` and `raw` with `?import` query

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- **Fix:** Update `vite` to version `6.2.4` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### Express.js Open Redirect in malformed URLs

- **File:** `Server/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-601](https://cwe.mitre.org/data/definitions/601.html)
- **Fix:** Update `express` to version `4.19.2` or later.

Run:
  npm update express  # For npm
  pip install --upgrade express  # For Python
  go get express@latest  # For Go

### Mongoose: Prototype pollution in mongoose update casting via __proto__-prefixed dotted path (Schema._getSchema/path getter)

- **File:** `Server/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-1321](https://cwe.mitre.org/data/definitions/1321.html)
- **Fix:** Update `mongoose` to version `6.13.10` or later.

Run:
  npm update mongoose  # For npm
  pip install --upgrade mongoose  # For Python
  go get mongoose@latest  # For Go

### morgan vulnerable to Log Forging via unneutralized control characters in :remote-user

- **File:** `Server/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-117](https://cwe.mitre.org/data/definitions/117.html)
- **Fix:** Update `morgan` to version `1.11.0` or later.

Run:
  npm update morgan  # For npm
  pip install --upgrade morgan  # For Python
  go get morgan@latest  # For Go

### Nodemailer: CRLF injection in Nodemailer List-* header comments allows arbitrary message header injection

- **File:** `Server/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-93](https://cwe.mitre.org/data/definitions/93.html)
- **Fix:** Update `nodemailer` to version `8.0.9` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### Nodemailer jsonTransport bypasses disableFileAccess and disableUrlAccess during message normalization

- **File:** `Server/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-862](https://cwe.mitre.org/data/definitions/862.html)
- **Fix:** Update `nodemailer` to version `8.0.9` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### Nodemailer: Improper TLS Certificate Validation in OAuth2 Token Fetch Enables Credential Interception

- **File:** `Server/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-295](https://cwe.mitre.org/data/definitions/295.html)
- **Fix:** Update `nodemailer` to version `8.0.8` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### Nodemailer Vulnerable to SMTP Command Injection via CRLF in Transport name Option (EHLO/HELO) 

- **File:** `Server/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-93](https://cwe.mitre.org/data/definitions/93.html)
- **Fix:** Update `nodemailer` to version `8.0.5` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### Duplicate Advisory: Nodemailer is vulnerable to DoS through Uncontrolled Recursion

- **File:** `Server/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-674](https://cwe.mitre.org/data/definitions/674.html)
- **Fix:** Update `nodemailer` to version `7.0.11` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### Nodemailer: Email to an unintended domain can occur due to Interpretation Conflict

- **File:** `Server/package.json`
- **Severity:** MEDIUM
- **CWE:** [CWE-20](https://cwe.mitre.org/data/definitions/20.html)
- **Fix:** Update `nodemailer` to version `7.0.7` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### Server-Side Request Forgery in axios

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **Fix:** Update to version 1.7.4 or later

### axios: Axios NPM package 0.21.0 contains a Server-Side Request Forgery (SSRF) vulnerability where an attack

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **Fix:** Check NVD for patch information: https://nvd.nist.gov/vuln/detail/CVE-2020-28168

### react: Next.js is a React framework for building full-stack web applications. In versions starting from 13.

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **Fix:** Check NVD for patch information: https://nvd.nist.gov/vuln/detail/CVE-2025-48068

### react: use-context-selector is a React useContextSelector hook in userland Between 2026-05-18 15:57:18 and 

- **File:** `Client/package.json`
- **Severity:** MEDIUM
- **Fix:** Check NVD for patch information: https://nvd.nist.gov/vuln/detail/CVE-2026-48158

### Vite middleware may serve files starting with the same name with the public directory

- **File:** `Client/package.json`
- **Severity:** LOW
- **CWE:** [CWE-22](https://cwe.mitre.org/data/definitions/22.html)
- **Fix:** Update `vite` to version `7.1.5` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### Vite's `server.fs` settings were not applied to HTML files

- **File:** `Client/package.json`
- **Severity:** LOW
- **CWE:** [CWE-23](https://cwe.mitre.org/data/definitions/23.html)
- **Fix:** Update `vite` to version `7.1.5` or later.

Run:
  npm update vite  # For npm
  pip install --upgrade vite  # For Python
  go get vite@latest  # For Go

### Withdrawn Advisory: express improperly controls modification of query properties

- **File:** `Server/package.json`
- **Severity:** LOW
- **CWE:** [CWE-915](https://cwe.mitre.org/data/definitions/915.html)
- **Fix:** Update `express` to version `4.22.0` or later.

Run:
  npm update express  # For npm
  pip install --upgrade express  # For Python
  go get express@latest  # For Go

### express vulnerable to XSS via response.redirect()

- **File:** `Server/package.json`
- **Severity:** LOW
- **CWE:** [CWE-79](https://cwe.mitre.org/data/definitions/79.html)
- **Fix:** Update `express` to version `4.20.0` or later.

Run:
  npm update express  # For npm
  pip install --upgrade express  # For Python
  go get express@latest  # For Go

### Nodemailer has SMTP command injection due to unsanitized `envelope.size` parameter

- **File:** `Server/package.json`
- **Severity:** LOW
- **CWE:** [CWE-93](https://cwe.mitre.org/data/definitions/93.html)
- **Fix:** Update `nodemailer` to version `8.0.4` or later.

Run:
  npm update nodemailer  # For npm
  pip install --upgrade nodemailer  # For Python
  go get nodemailer@latest  # For Go

### axios Vulnerable to Full Man-in-the-Middle via Prototype Pollution Gadget in `config.proxy`

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.16.0 or later

### axios Vulnerable to Credential Theft and Response Hijacking via Prototype Pollution Gadget in Config Merge

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.2 or later

### Axios has a NO_PROXY Hostname Normalization Bypass that Leads to SSRF

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.0 or later

### Axios: Invisible JSON Response Tampering via Prototype Pollution Gadget in `parseReviver`

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.2 or later

### Axios: Excessive recursion in formDataToJSON can cause denial of service

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 0.33.0 or later

### Axios is Vulnerable to Denial of Service via __proto__ Key in mergeConfig

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.13.5 or later

### Axios: CRLF Injection in multipart/form-data body via unsanitized blob.type in formDataToStream

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios is vulnerable to DoS attack through lack of data size check

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.12.0 or later

### Axios' HTTP adapter-streamed uploads bypass maxBodyLength when maxRedirects: 0

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios: unbounded recursion in toFormData causes DoS via deeply nested request data

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios: Header Injection via Prototype Pollution

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios: Nested axios option objects can consume polluted prototype values

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 0.33.0 or later

### axios has DoS & Header Injection via Prototype Pollution Read-Side Gadgets in axios merge functions

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.16.0 or later

### Axios has Unrestricted Cloud Metadata Exfiltration via Header Injection Chain

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.0 or later

### Axios: Regular Expression Denial of Service (ReDoS) via Cookie Name Injection

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.16.0 or later

### Axios: Proxy-Authorization header leaks to redirect target when proxy is re-evaluated to direct connection

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.16.0 or later

### axios Requests Vulnerable To Possible SSRF and Credential Leakage via Absolute URL

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.8.2 or later

### Axios: no_proxy bypass via IP alias allows SSRF

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios: Prototype pollution gadgets can alter axios request construction

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.18.0 or later

### Axios: Proxy-Authorization Credential Leak to Origin Server Across HTTP-to-HTTPS Redirect in Axios Node.js HTTP Adapter

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.16.0 or later

### Axios: Prototype Pollution Gadgets - Response Tampering, Data Exfiltration, and Request Hijacking

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios: Deep formToJSON Key Recursion Can Cause Denial of Service

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 0.33.0 or later

### Axios: Incomplete Fix for CVE-2025-62718 — NO_PROXY Protection Bypassed via RFC 1122 Loopback Subnet (127.0.0.0/8) in Axios 1.15.0

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios has prototype pollution read-side gadgets in HTTP adapter that allow credential injection and request hijacking

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.2 or later

### Axios: HTTP adapter streamed responses bypass maxContentLength

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios: Authentication Bypass via Prototype Pollution Gadget in `validateStatus` Merge Strategy

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios: Null Byte Injection via Reverse-Encoding in AxiosURLSearchParams

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### Axios: XSRF Token Cross-Origin Leakage via Prototype Pollution Gadget in `withXSRFToken` Boolean Coercion

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.15.1 or later

### PostCSS: Arbitrary file read and information disclosure via attacker-controlled sourceMappingURL in CSS comments

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.5.12 or later

### PostCSS: incomplete fix of GHSA-6g55-p6wh-862q — attacker-controlled sourceMappingURL reads arbitrary .map files when `from` is unset

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.5.23 or later

### PostCSS has XSS via Unescaped </style> in its CSS Stringify Output

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.5.10 or later

### PostCSS: Path Traversal in Previous Source Map Auto-Loading (sourceMappingURL) leads to Arbitrary .map File Disclosure

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.5.18 or later

### Vite has an `server.fs.deny` bypass with an invalid `request-target`

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 6.2.6 or later

### Vite has a `server.fs.deny` bypassed for `inline` and `raw` with `?import` query

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 6.2.4 or later

### Vite Vulnerable to Path Traversal in Optimized Deps `.map` Handling

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.0.5 or later

### Vite DOM Clobbering gadget found in vite bundled scripts that leads to XSS

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 5.4.6 or later

### Vite's server.fs.deny bypassed with /. for files under project root

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 6.3.4 or later

### Vite's `server.fs.deny` did not deny requests for patterns with directories.

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.9.18 or later

### Vite XSS vulnerability in `server.transformIndexHtml` via URL payload

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 4.4.12 or later

### vite allows server.fs.deny bypass via backslash on Windows

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 7.1.11 or later

### Vite's `server.fs.deny` is bypassed when using `?import&raw`

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 5.4.6 or later

### Vite dev server option `server.fs.deny` can be bypassed when hosted on case-insensitive filesystem

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.9.17 or later

### launch-editor vulnerable to command injection via the crafted request on Windows

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.9.0 or later

### vite: `server.fs.deny` bypass on Windows alternate paths

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.0.16 or later

### Vite middleware may serve files starting with the same name with the public directory

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 7.1.5 or later

### Vite's `server.fs` settings were not applied to HTML files

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 7.1.5 or later

### launch-editor: NTLMv2 hash disclosure via UNC path handling on Windows

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.14.1 or later

### Websites were able to send any requests to the development server and read the response in vite

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 6.0.9 or later

### Vite bypasses server.fs.deny when using ?raw??

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 6.2.3 or later

### Vite allows server.fs.deny to be bypassed with .svg or relative paths

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Update to version 6.2.5 or later

### Cloudinary Node SDK is vulnerable to Arbitrary Argument Injection through parameters that include an ampersand

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.7.0 or later

### express vulnerable to XSS via response.redirect()

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 4.20.0 or later

### Express.js Open Redirect in malformed URLs

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 4.19.2 or later

### Mongoose: Prototype pollution in mongoose update casting via __proto__-prefixed dotted path (Schema._getSchema/path getter)

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 6.13.10 or later

### Mongoose search injection vulnerability

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.8.3 or later

### Mongoose search injection vulnerability

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.9.5 or later

### Mongoose's Improper Sanitization of $nor in sanitizeFilter May Allow NoSQL Injection

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 6.13.9 or later

### morgan vulnerable to Log Forging via unneutralized control characters in :remote-user

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 1.11.0 or later

### Multer vulnerable to Denial of Service via memory leaks from unclosed streams

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.0.0 or later

### Multer vulnerable to Denial of Service from maliciously crafted requests

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.0.0 or later

### Multer Vulnerable to Denial of Service via Uncontrolled Recursion

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.1.1 or later

### Multer vulnerable to Denial of Service via deeply nested field names

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.2.0 or later

### Multer vulnerable to Denial of Service via unhandled exception from malformed request

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.0.2 or later

### Multer vulnerable to Denial of Service via unhandled exception

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.0.1 or later

### Multer vulnerable to Denial of Service via resource exhaustion

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.1.0 or later

### Multer vulnerable to Denial of Service via incomplete cleanup

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 2.1.0 or later

### Nodemailer: CRLF injection in Nodemailer List-* header comments allows arbitrary message header injection

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.0.9 or later

### nodemailer ReDoS when trying to send a specially crafted email

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 6.9.9 or later

### Nodemailer has SMTP command injection due to unsanitized `envelope.size` parameter

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.0.4 or later

### Nodemailer: Email to an unintended domain can occur due to Interpretation Conflict

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 7.0.7 or later

### Nodemailer: Message-level raw option bypasses disableFileAccess/disableUrlAccess, enabling arbitrary file read and full-response SSRF in the delivered message

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 9.0.1 or later

### Nodemailer: Improper TLS Certificate Validation in OAuth2 Token Fetch Enables Credential Interception

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.0.8 or later

### Nodemailer’s addressparser is vulnerable to DoS caused by recursive calls

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 7.0.11 or later

### Nodemailer Vulnerable to SMTP Command Injection via CRLF in Transport name Option (EHLO/HELO) 

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.0.5 or later

### Nodemailer jsonTransport bypasses disableFileAccess and disableUrlAccess during message normalization

- **File:** `Server/package.json`
- **Severity:** LOW
- **Fix:** Update to version 8.0.9 or later

### react: matrix-react-sdk is an npm package which is a Matrix SDK for React Javascript. In matrix-react-sdk b

- **File:** `Client/package.json`
- **Severity:** LOW
- **Fix:** Check NVD for patch information: https://nvd.nist.gov/vuln/detail/CVE-2021-21320

### Mongoose search injection vulnerability

- **File:** `Server/package.json`
- **Severity:** CRITICAL
- **CWE:** [CWE-94](https://cwe.mitre.org/data/definitions/94.html)
- **Fix:** Update `mongoose` to version `8.9.5` or later.

Run:
  npm update mongoose  # For npm
  pip install --upgrade mongoose  # For Python
  go get mongoose@latest  # For Go

### axios: Bruno is an open source IDE for exploring and testing APIs. Prior to 3.2.1, Bruno was affected by a 

- **File:** `Client/package.json`
- **Severity:** CRITICAL
- **Fix:** Check NVD for patch information: https://nvd.nist.gov/vuln/detail/CVE-2026-34841

### react: react-native-bottom-tabs is a library of Native Bottom Tabs for React Native. In versions 0.9.2 and 

- **File:** `Client/package.json`
- **Severity:** CRITICAL
- **Fix:** Check NVD for patch information: https://nvd.nist.gov/vuln/detail/CVE-2025-54594

### CVE-2026-22029 in @remix-run/router

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-79](https://cwe.mitre.org/data/definitions/79.html)

### CVE-2024-39338 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-918](https://cwe.mitre.org/data/definitions/918.html)

### CVE-2025-27152 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-918](https://cwe.mitre.org/data/definitions/918.html)

### CVE-2025-58754 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-770](https://cwe.mitre.org/data/definitions/770.html)

### CVE-2026-25639 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-754](https://cwe.mitre.org/data/definitions/754.html)

### CVE-2026-42033 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1321](https://cwe.mitre.org/data/definitions/1321.html)

### CVE-2026-42035 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-113](https://cwe.mitre.org/data/definitions/113.html)

### CVE-2026-42043 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-183](https://cwe.mitre.org/data/definitions/183.html)

### CVE-2026-42264 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1321](https://cwe.mitre.org/data/definitions/1321.html)

### CVE-2026-44486 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-200](https://cwe.mitre.org/data/definitions/200.html)

### CVE-2026-44487 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-201](https://cwe.mitre.org/data/definitions/201.html)

### CVE-2026-44494 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-441](https://cwe.mitre.org/data/definitions/441.html)

### CVE-2026-44495 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-94](https://cwe.mitre.org/data/definitions/94.html)

### CVE-2026-44496 in axios

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)

### CVE-2026-13149 in brace-expansion

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)

### CVE-2026-14257 in brace-expansion

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)

### CVE-2026-69152 in brace-expansion

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)

### CVE-2024-4068 in braces

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1050](https://cwe.mitre.org/data/definitions/1050.html)

### CVE-2025-7783 in form-data

- **File:** `Client/package-lock.json`
- **Severity:** critical
- **CWE:** [CWE-330](https://cwe.mitre.org/data/definitions/330.html)

### CVE-2026-12143 in form-data

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-93](https://cwe.mitre.org/data/definitions/93.html)

### CVE-2026-26996 in minimatch

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

### CVE-2026-27903 in minimatch

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-407](https://cwe.mitre.org/data/definitions/407.html)

### CVE-2026-27904 in minimatch

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

### CVE-2026-67213 in nanoid

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-835](https://cwe.mitre.org/data/definitions/835.html)

### CVE-2026-67214 in nanoid

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-835](https://cwe.mitre.org/data/definitions/835.html)

### CVE-2026-33671 in picomatch

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

### CVE-2026-45623 in postcss

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-22](https://cwe.mitre.org/data/definitions/22.html)

### CVE-2026-73646 in postcss

- **File:** `Client/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-22](https://cwe.mitre.org/data/definitions/22.html)

### CVE-2024-45590 in body-parser

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-405](https://cwe.mitre.org/data/definitions/405.html)

### CVE-2026-13149 in brace-expansion

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)

### CVE-2026-14257 in brace-expansion

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)

### CVE-2026-69152 in brace-expansion

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)

### CVE-2024-4068 in braces

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1050](https://cwe.mitre.org/data/definitions/1050.html)

### CVE-2025-12613 in cloudinary

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-88](https://cwe.mitre.org/data/definitions/88.html)

### CVE-2025-7783 in form-data

- **File:** `Server/package-lock.json`
- **Severity:** critical
- **CWE:** [CWE-330](https://cwe.mitre.org/data/definitions/330.html)

### CVE-2026-12143 in form-data

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-93](https://cwe.mitre.org/data/definitions/93.html)

### CVE-2025-7783 in form-data

- **File:** `Server/package-lock.json`
- **Severity:** critical
- **CWE:** [CWE-330](https://cwe.mitre.org/data/definitions/330.html)

### CVE-2026-12143 in form-data

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-93](https://cwe.mitre.org/data/definitions/93.html)

### CVE-2025-65945 in jws

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-347](https://cwe.mitre.org/data/definitions/347.html)

### CVE-2026-4800 in lodash

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-94](https://cwe.mitre.org/data/definitions/94.html)

### CVE-2026-26996 in minimatch

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

### CVE-2026-27903 in minimatch

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-407](https://cwe.mitre.org/data/definitions/407.html)

### CVE-2026-27904 in minimatch

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

### CVE-2025-23061 in mongoose

- **File:** `Server/package-lock.json`
- **Severity:** critical
- **CWE:** [CWE-94](https://cwe.mitre.org/data/definitions/94.html)

### CVE-2024-53900 in mongoose

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-89](https://cwe.mitre.org/data/definitions/89.html)

### CVE-2026-42334 in mongoose

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-74](https://cwe.mitre.org/data/definitions/74.html)

### CVE-2025-47935 in multer

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-401](https://cwe.mitre.org/data/definitions/401.html)

### CVE-2025-47944 in multer

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-248](https://cwe.mitre.org/data/definitions/248.html)

### CVE-2025-48997 in multer

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-248](https://cwe.mitre.org/data/definitions/248.html)

### CVE-2025-7338 in multer

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-248](https://cwe.mitre.org/data/definitions/248.html)

### CVE-2026-2359 in multer

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-772](https://cwe.mitre.org/data/definitions/772.html)

### CVE-2026-3304 in multer

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-459](https://cwe.mitre.org/data/definitions/459.html)

### CVE-2026-3520 in multer

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-674](https://cwe.mitre.org/data/definitions/674.html)

### CVE-2026-5079 in multer

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-400](https://cwe.mitre.org/data/definitions/400.html)

### CVE-2025-14874 in nodemailer

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-703](https://cwe.mitre.org/data/definitions/703.html)

### GHSA-p6gq-j5cr-w38f in nodemailer

- **File:** `Server/package-lock.json`
- **Severity:** high

### CVE-2024-45296 in path-to-regexp

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

### CVE-2024-52798 in path-to-regexp

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

### CVE-2026-4867 in path-to-regexp

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

### CVE-2026-33671 in picomatch

- **File:** `Server/package-lock.json`
- **Severity:** high
- **CWE:** [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

---

Generated by [mcontributor](https://github.com/mcontributor) security scanner.