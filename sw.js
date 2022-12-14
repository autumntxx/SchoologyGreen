self.addEventListener('fetch', (event) => {
    if (event.request.url == 'https://sub2kc5fnow.schoology.com/sites/all/libraries/tinymce/jscripts/tiny_mce/themes/advanced/skins/default/ui.css') {
        event.respondWith(async () => {
            const normal = await (await fetch('https://sub2kc5fnow.schoology.com/sites/all/libraries/tinymce/jscripts/tiny_mce/themes/advanced/skins/default/ui.css')).text();
            const sgreen = await (await fetch('https://cdn.jsdelivr.net/gh/Kc5f/SchoologyGreen/main.css')).text();
            return normal + ' ' + sgreen;
        });
    };
});