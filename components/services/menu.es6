app.service('Menu', () => {
    var previousIndex, currentPage, pages = [];

    var setPage = (url) => {
        currentPage = url;
        //$state.go(url);
        //console.log('url', url);
        window.location.href = url;
    };

    var setPages = (obj) => {
        pages = obj;
    };

    var clickMenuItem = (index) => {

        /* Code added to collapse the previous uncollapsed menu */
        if (previousIndex != undefined && index != previousIndex && pages[previousIndex].active) {
            pages[previousIndex].active = !pages[previousIndex].active;
        }

        if (pages[index].sub) {
            pages[index].active = !(pages[index].active);
        } else {
            setPage(pages[index].url);
        }

        previousIndex = index;
    };

    var setSubMenu = () => {

    };

    var isCurrentPage = (url) => {
        return false;
    };

    var init = () => {
    };

    init();

    return {
        setPages,
        clickMenuItem,
        setSubMenu,
        getPages: () => pages,
        setPage,
        isCurrentPage
    }
});

