# Coding Factory Template & Style Guide

## Structure

### Task Runner
#### GULP

### HTML Template
#### EJS

### CSS Preprocessor
#### SASS(SCSS)

### การวางโครงสร้าง CSS
#### FLOCSS
- เว็บไซต์อ้างอิงของผู้สร้าง FLOCSS  
https://github.com/hiloki/flocss
https://hiloki.github.io/s/flocss-layout/

- ทำตามกฎด้านบน แต่มีเรื่องที่เปลี่ยนแปลงเล็กน้อยเพื่อให้สามารถนำไปใช้ซ้ำง่าย, อ่านง่าย และเพื่อ performance ที่ดียิ่งขึ้น 
  - อนุญาติให้ใส่ลักษณะพิเศษ เช่น ความกว้าง, สี, ระยะห่างเฉพาะของ Component
  - หากจำเป็น สามารถใช้ Project หรือ Utility เพื่อช่วยเรื่อง Style หรือเขียนทับได้

### กฎการตั้งชื่อ class
#### FLOCSS + MindBEMding
- ใส่ Prefix ตามกฎของ「FLOCSS」  
  - Layout: .l-*  
  - Component: .c-*  
  - Project: .p-*  
  - Utility: .u-*  

- เว็บไซต์อ้างอิงของ MindBEMding  
https://gist.github.com/juno/6182957

#### การใช้ไอคอน svg
แนะนำให้ใช้โดย Encode เป็น Data-URI-Scheme สามารถ Encode แบบอัตโนมัติได้ด้วยเครื่องมือนี้「[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg)」  
ตัวอย่าง)  
`background-image: svg-load('assets/image/ico/ico_arrow_right_01.svg', fill=#e39600);`

### กฎการตั้งชื่อ
#### Coding Factory Guide Line

### ตัวอย่างโครงสร้างไดเรคเทอรี่
    root
    ├── .babelrc（การตั้งค่า babel）
    ├── .csscomb.json（การตั้งค่า csscomb）
    ├── .editorconfig（การตั้งค่า document format）
    ├── .gitignore（การตั้งค่าการยกเว้น git）
    ├── .htmlhintrc.json（การตั้งค่า htmlhint）
    ├── README.md（อธิบายโครงสร้างของ template นี้）
    ├── gulpfile.js（การตั้งค่า gulp การตั้งค่า environment ของแต่ละโปรเจค）
    ├── package.json（จัดการ package）
    ├── webpack.config.base.js（การตั้งค่าที่ใช้ร่วมกันของ webpack）
    ├── webpack.config.development.js（การตั้งค่า development environment ของ webpack）
    ├── webpack.config.release.js（การตั้งค่า real environment ของ webpack）
    ├── test（preview environment สร้างด้วย task：gulp）
    ├── release（delivery environment สร้างด้วย task：gulp release）
    └── src（development environment）
        ├── ejs（เก็บไฟล์ ejs）
        │   ├── data（เก็บไฟล์เสริม）
        │   │   ├── setting.csv（จัดการข้อมูล เช่น meta）
        │   │   ├── setting.json（ไฟล์ที่ถูกแปลงจาก setting.csv เป็น json ใช้ gulp สร้างอัตโนมัติ）
        │   │   └── styleguide.json（component list สำหรับ style guide ใช้ gulp สร้างอัตโนมัติ）
        │   ├── pages（เก็บเพจต่างๆ output ออกมาตามไดเรคเทอรี่ ）
        │   │   ├── topics
        │   │   │   ├── topics1
        │   │   │   │   └── index.ejs
        │   │   │   └── index.ejs
        │   │   ├── check.ejs（หน้า sitemap สำหรับเช็ค）
        │   │   └── index.ejs
        │   ├── parts（ใส่ common component สำหรับ include）
        │   │   ├── _breadcrumb.ejs
        │   │   ├── _foot.ejs
        │   │   ├── _footer.ejs
        │   │   ├── _head.ejs
        │   │   └── _header.ejs
        │   ├── styleguide（ใส่ component สำหรับ style guide）
        │   │   ├── component
        │   │   │   ├── c-button.ejs
        │   │   │   ├── c-check.ejs
        │   │   │   ├── c-control.ejs
        │   │   │   ├── c-embed.ejs
        │   │   │   ├── c-figure.ejs
        │   │   │   ├── c-heading-01.ejs
        │   │   │   ├── c-heading-02.ejs
        │   │   │   ├── c-heading-03.ejs
        │   │   │   ├── c-hero.ejs
        │   │   │   ├── c-icon.ejs
        │   │   │   ├── c-link.ejs
        │   │   │   ├── c-list.ejs
        │   │   │   ├── c-table-list.ejs
        │   │   │   ├── c-table-scroll.ejs
        │   │   │   ├── c-table.ejs
        │   │   │   └── c-text.ejs
        │   │   ├── js
        │   │   │   ├── js-accordion.ejs
        │   │   │   ├── js-current.ejs
        │   │   │   ├── js-inview.ejs
        │   │   │   ├── js-modal.ejs
        │   │   │   ├── js-more.ejs
        │   │   │   ├── js-scroll.ejs
        │   │   │   ├── js-slider.ejs
        │   │   │   ├── js-sticky.ejs
        │   │   │   ├── js-stretch.ejs
        │   │   │   ├── js-tab.ejs
        │   │   │   └── js-toggle.ejs
        │   │   ├── layout
        │   │   │   ├── l-block.ejs
        │   │   │   ├── l-footer.ejs
        │   │   │   ├── l-grid.ejs
        │   │   │   ├── l-header.ejs
        │   │   │   └── l-section.ejs
        │   │   ├── project
        │   │   │   ├── p-box.ejs
        │   │   │   ├── p-card.ejs
        │   │   │   ├── p-flag.ejs
        │   │   │   ├── p-form.ejs
        │   │   │   ├── p-fullscreen.ejs
        │   │   │   └── p-info.ejs
        │   │   ├── utility
        │   │   │   ├── u-align.ejs
        │   │   │   ├── u-border.ejs
        │   │   │   ├── u-color.ejs
        │   │   │   ├── u-display.ejs
        │   │   │   ├── u-font.ejs
        │   │   │   ├── u-hidden.ejs
        │   │   │   ├── u-margin.ejs
        │   │   │   └── u-width.ejs
        │   │   └── styleguide.ejs（style guide page）
        │   └── theme（ใส่ theme สำหรับ mass production）
        │       ├── data
        │       │   └── XXX.xlsx（ไฟล์สำหรับ mass production）
        │       ├── json
        │       │   └── XXX.json（ไฟล์ที่ถูกแปลงจาก theme_XXX.xlsx เป็น json ใช้ gulp สร้างอัตโนมัติ）
        │       └── template
        │           └── XXXX.ejs（ไฟล์ ejs สำหรับ mass production）
        ├── file（ใส่ไฟล์อื่นๆ output ออกมาตามไดเรคเทอรี่ ）
        │   └── assets
        │       ├── fonts
        │       │   ├── NotoSansJP-Bold.otf
        │       │   ├── NotoSansJP-Bold.woff
        │       │   ├── NotoSansJP-Bold.woff2
        │       │   ├── NotoSansJP-Regular.otf
        │       │   ├── NotoSansJP-Regular.woff
        │       │   └── NotoSansJP-Regular.woff2
        │       ├── js
        │       │   └── jquery-3.3.1.min.js
        │       └── video
        │           └── video_01.mp4
        ├── images（ใส่ภาพ output ออกมาตามไดเรคเทอรี่  และถ้าตั้งค่า imageMinify ใน gulp เป็น ON ภาพที่ออกมาจะเป็นไฟล์ที่ถูกบีบอัด）
        │   └── assets
        │       └── image
        │           ├── ico
        │           │   ├── ico_arrow_bottom_01.svg
        │           │   ├── ico_arrow_circle_top.svg
        │           │   ├── ico_arrow_left_01.svg
        │           │   ├── ico_arrow_right_01.svg
        │           │   ├── ico_pdf_01.svg
        │           │   └── ico_window_01.svg
        │           └── img
        │               └── img_video_01.jpg
        ├── scripts（ใส่ไฟล์ js）
        │   ├── assets（output ออกมาตามไดเรคเทอรี่ ）
        │   │   └── js
        │   │       ├── common.js（js ที่ใช้ร่วมกันทั้งเว็บไซต์）
        │   │       ├── head.js（js ที่จำเป็นต้องเรียกอ่านใน head กำหนด viewport ให้เหมาะสม）
        │   │       └── XXX.js（js เฉพาะหน้าหรือเฉพาะคาเทโกรี่）
        │   ├── data（ใส่ไฟล์เสริม）
        │   │   └── _variables.js（กำหนดตัวแปร global）
        │   ├── lib（ใส่ plugin）
        │   │   ├── _jquery.matchHeight-min.js（plugin ทำให้ความสูงเท่ากัน）
        │   │   ├── _modaal.min.js（plugin modal）
        │   │   ├── _picturefill.min.js（polyfill ของ picture tag）
        │   │   └── _slick.min.js（picture slider）
        │   └── modules（ใส่แต่ละฟังก์ชั่น）
        │       ├── _accordion.js（accordion）
        │       ├── _current.js（ถ้า URL กับ href เหมือนกันให้ใส่ class）
        │       ├── _fit.js（ใช้กับบราวเซอร์ที่ไม่รองรับ object-fit）
        │       ├── _inview.js（ถ้าอยู่ใน display area ให้ใส่ class）
        │       ├── _modal.js（modal window）
        │       ├── _more.js（see more）
        │       ├── _open.js（tab หรือ accordion เปิดเมื่อ load）
        │       ├── _pagetop.js（ถ้า scroll ให้ใส่ class）
        │       ├── _picturefill.js（ใช้กับบราวเซอร์ที่ไม่รองรับ picture tag）
        │       ├── _responsive.js（แยกการทำงานด้วย breakpoint）
        │       ├── _scroll.js（smooth scroll）
        │       ├── _slider.js（slider）
        │       ├── _sns.js（แชร์เพจที่กำลังเปิดดูอยู่）
        │       ├── _sticky.js（sticky）
        │       ├── _stretch.js（ทำให้ความสูงเท่า）
        │       ├── _tab.js（tab switching）
        │       └── _toggle.js（ถ้า click ให้ใส่ class）
        └── styles（ใส่ไฟล์ scss）
            ├── assets（output ออกมาตามไดเรคเทอรี่ ）
            │   └── css
            │       ├── common.scss（scss ที่ใช้ร่วมกันในเว็บไซต์）
            │       └── top.scss（scss เฉพาะหน้าหรือเฉพาะคาเทโกรี่）
            ├── foundation（ใส่ style หลักๆ）
            │   ├── _default.scss（กำหนด style selector）
            │   ├── _keyframes.scss（กำหนด keyframes）
            │   ├── _mixin.scss（กำหนด mixin）
            │   ├── _variables.scss（กำหนด global setting）
            │   └── _webfont.scss（กำหนด webfont）
            ├── layout（ใส่ style container block ที่ใช้ร่วมกัน）
            │   ├── _block.scss
            │   ├── _footer.scss
            │   ├── _grid.scss
            │   ├── _gutter.scss
            │   ├── _header.scss
            │   ├── _main.scss
            │   └── _section.scss
            └── object（ใส่ visual pattern ที่ใช้ซ้ำบ่อย）
                ├── component（ใส่ module ย่อยๆ โดยถือว่าเป็น pattern ที่ใช้ซ้ำได้）
                │   ├── _button.scss
                │   ├── _check.scss
                │   ├── _control.scss
                │   ├── _embed.scss
                │   ├── _figure.scss
                │   ├── _heading-01.scss
                │   ├── _heading-02.scss
                │   ├── _heading-03.scss
                │   ├── _hero.scss
                │   ├── _icon.scss
                │   ├── _link.scss
                │   ├── _list.scss
                │   ├── _navi.scss
                │   ├── _table-list.scss
                │   ├── _table.scss
                │   ├── _tag.scss
                │   └── _text.scss
                ├── plugin（ใส่ style สำหรับ js plugin）
                │   ├── _modaal.scss
                │   └── _slick.scss
                ├── project（ใส่ไฟล์ที่เป็นแพทเทิร์นเฉพาะของโปรเจคซึ่งไม่ได้ใช้ใน element ใน Component ต่างๆ）
                │   ├── _accordion.scss
                │   ├── _box.scss
                │   ├── _breadcrumb.scss
                │   ├── _card.scss
                │   ├── _current.scss
                │   ├── _flag.scss
                │   ├── _form.scss
                │   ├── _fullscreen.scss
                │   ├── _info.scss
                │   ├── _inview.scss
                │   ├── _more.scss
                │   ├── _pagetop.scss
                │   ├── _slider.scss
                │   ├── _sticky.scss
                │   ├── _tab.scss
                │   └── _toggle.scss
                └── utility（ใส่ class สำหรับปรับแต่ง style เล็กๆ น้อยๆ ใช้ในกรณีที่ modify object ใน Component กับ Project layer ได้ยากหรือไม่เหมาะสมที่จะแก้ไข）
                    ├── _align.scss
                    ├── _border.scss
                    ├── _color.scss
                    ├── _display.scss
                    ├── _font.scss
                    ├── _hidden.scss
                    ├── _lineheight.scss
                    ├── _margin.scss
                    └── _width.scss

## วิธีเริ่มต้น, Gulp task, webpack

### วิธีเริ่มต้น
ติดตั้ง Gulp ใน local ด้วย npm (สามารถตัดขั้นตอนนี้ออกไปได้)

```bash
npm i -D gulp
```

ติดตั้ง package ด้วย npm

```bash
npm i
```

### Gulp task ที่ใช้เป็นหลัก

```bash
gulp
```
task สำหรับ development จะถูก compile ไว้ใน /test/


```bash
gulp release
```
task สำหรับ delevery จะถูก compile ไว้ใน /release/ 
ปกติแล้วตอนเช็คก็จะใช้ตัวนี้

### task อื่นๆ ที่ใช้ในแต่ละกรณี

```bash
gulp theme
```
สร้างไฟล์ ejs สำหรับ mass production จากไฟล์ json
กรณีที่เป็นการตั้งค่าแบบ defualt ให้ทำตามขั้นตอนต่อไปนี้  
1. ใส่ไฟล์ 「{name}.ejs」ซึ่งจะเป็นเพจไว้ใน src/ejs/theme/template/
1. ใส่ไฟล์ {name}.xlsx ใน src/ejs/theme/data/
1. เปิด command「gulp theme」
1. ไฟล์ src/ejs/pages/{name}/xxx.ejs จะถูกสร้างขึ้นมา

※กรณีที่ตั้ง environment setting ของ gulpfile.js เป็น「theme: 'theme'」ต้องเปิด command「gulp」

### gulp environment setting
ตั้งค่าใน [設定] (setting) ที่อยู่ใน gulpfile.js ของแต่ละโปรเจค  

### webpack environment setting
ตั้งค่า bandle ของ js 
- common setting > webpack.config.base.js
- development environment > webpack.config.development.js
- real environment >webpack.config.release.js。

### อื่นๆ
จัดการข้อมูล meta ด้วย src/ejs/data/setting.csv
สร้างไฟล์ sitemap สำหรับเช็ค「spread sheet （checksheet_sitemap_GAS [メタ自動チェック可能]のシート：setting）」 → กำหนด format และดาวน์โหลด → ดาวน์โหลดจาก Comma-Separated Values（.csv、ชีทปัจจุบัน）เป็นไฟล์ csv และใส่ไว้ในแต่ละโปรเจค 
