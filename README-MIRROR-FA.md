# تابان ادیت — نسخه GitHub Pages و سورس Lovable

این مخزن اکنون شامل دو نسخه است:
- `index.html` و `assets/` و `fonts/`: سایت مستقل استاتیک برای GitHub Pages (بدون سرور).
- `lovable-source/`: سورس React/TypeScript/TanStack Start استخراج‌شده از پروژه Lovable در commit `c01b69c78654c0c6e3933929155aa4c84d939e42`.

## تفاوت‌ها و محدودیت‌ها
تمام فایل‌های متنی پروژه از Lovable منتقل شده‌اند. تصویر هیرو و نشان سایت GitHub با **عکس و لوگوی اصل ارسالی کاربر در ۳۱ اکتبر ۲۰۲۶** جایگزین شدند. فایل‌های اصلی `assets/taban-hero.webp` و `assets/taban-logo.png` هستند؛ عکس هیرو از PNG ارسالی با حفظ رزولوشن ۱۰۲۴×۱۰۲۴ به WebP تبدیل شده و لوگو بدون تغییر محتوایی از PNG ارسالی استفاده می‌کند. این تصاویر عمداً ممکن است با تصاویر سایت Lovable متفاوت باشند. فونت‌های Doran Bold و Kalameh Bold از فایل‌های موجود در مخزن مرتبط کاربر به صورت محلی بارگذاری می‌شوند، با اندازه فایل‌هایی اندکی متفاوت از خروجی Lovable. 

برای اجرای نسخه React از `lovable-source/`، در محیط Node.js فرمان `npm install` و `npm run dev` اجرا کنید. GitHub Pages به تنهایی اپ سروری TanStack Start را اجرا نمی‌کند؛ به همین علت ریشه مخزن خروجی HTML استاتیک نزدیک به ظاهر Lovable است.

پشتیبان نسخه قبل از انتقال: شاخه `backup-before-lovable-import-2026-10-31`.

پروژه اصلی Lovable: https://taban-edit.lovable.app/
