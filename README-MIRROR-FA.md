# تابان ادیت — نسخه GitHub Pages و سورس Lovable

این مخزن اکنون شامل دو نسخه است:
- `index.html` و `assets/` و `fonts/`: سایت مستقل استاتیک برای GitHub Pages (بدون سرور).
- `lovable-source/`: سورس React/TypeScript/TanStack Start استخراج‌شده از پروژه Lovable در commit `c01b69c78654c0c6e3933929155aa4c84d939e42`.

## تفاوت‌ها و محدودیت‌ها
تمام فایل‌های متنی پروژه از Lovable منتقل شده‌اند. چند فایل تصویری باینری اصلی (عکس hero، لوگوی فشرده، favicon) در رابط خواندن Lovable قابل انتقال مستقیم نبودند؛ بنابراین برای اجرای نسخه GitHub از نسخه‌های تصویری موجود در مخزن قبلی استفاده شده است. **عکس و نشان ممکن است کاملاً پیکسلی با سایت Lovable یکسان نباشند.** فونت‌های Doran Bold و Kalameh Bold از فایل‌های موجود در مخزن مرتبط کاربر به صورت محلی بارگذاری می‌شوند، با اندازه فایل‌هایی اندکی متفاوت از خروجی Lovable. 

برای اجرای نسخه React از `lovable-source/`، در محیط Node.js فرمان `npm install` و `npm run dev` اجرا کنید. GitHub Pages به تنهایی اپ سروری TanStack Start را اجرا نمی‌کند؛ به همین علت ریشه مخزن خروجی HTML استاتیک نزدیک به ظاهر Lovable است.

پشتیبان نسخه قبل از انتقال: شاخه `backup-before-lovable-import-2026-10-31`.

پروژه اصلی Lovable: https://taban-edit.lovable.app/
