$(function () {
    const div_children = $('#header').children('div').addClass('grid_item');
        for (let i = 1; i <= div_children.length;i++) {
            div_children[i-1].style.gridColumnStart = i;
            div_children[i-1].style.gridColumnEnd = i+1;
            if (i > 1 && i <= div_children.length - 1) {
                div_children[i-1].classList.add('grid_item_link');
                const item_children = div_children[i-1].children;
                item_children[0].classList.add('left_item_div');
                item_children[1].classList.add('right_item_div');
            }
        }
        $('#destinations').on('click', () => {
            const path = window.location.href;
            const base_path = path.slice(0,path.lastIndexOf('ProjekatEpos/')) + 'ProjekatEpos/';
            window.location.replace(base_path + './destinacije/index.html');
        })
        $('#home_div').on('click', () => {
            const path = window.location.href;
            const base_path = path.slice(0,path.lastIndexOf('ProjekatEpos/')) + 'ProjekatEpos/';
            window.location.replace(base_path + './index.html');
        })
        $('#about_div').on('click', () => {
            const path = window.location.href;
            const base_path = path.slice(0,path.lastIndexOf('ProjekatEpos/')) + 'ProjekatEpos/';
            window.location.replace(base_path + './oNama/opis.html');
        })
})