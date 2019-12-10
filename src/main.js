let mainContainer = document.getElementById('main_container');


class MainMenuBlock {
    constructor(mainContainer) {
        this.mainContainer = mainContainer;
        this.menuContainer = document.createElement('div');
        this.menuHomeBtn = document.createElement('a');
        this.menuList = document.createElement('ul');
        this.menuItem = document.createElement('li');
    }
    renderHomeBtn() {
        this.menuContainer.append(this.menuHomeBtn);
        this.menuHomeBtn.innerHTML = 'Home';
        this.menuHomeBtn.setAttribute('href', '#');
    }

    renderMenuList() {
       this.menuContainer.append(this.menuList);
    //цикл срабатывает один раз???
    //    for (let i=0; i<5; i++) {
    //         this.menuList.append(this.menuItem); 
    //     }
        this.menuList.innerHTML = '<li>About</li> <li>Portfolio</li> <li>Blog</li> <li>Team</li> <li>Contact</li>' 
    }

    renderMainMenu() {
        this.renderHomeBtn()
        this.renderMenuList();
        this.mainContainer.append(this.menuContainer);
        this.menuContainer.className = 'menu-container';
    }
}
let mainMenu = new MainMenuBlock(mainContainer);
mainMenu.renderMainMenu();

class FirstScreen {
    constructor(mainContainer) {
        this.mainContainer = mainContainer;
        this.firstBlockContainer = document.createElement('div');
        this.firstBlockHeader = document.createElement('h1');
        this.firstBlockDesc = document.createElement('p');
        this.firstBlockButton = document.createElement('button');
    }
    renderHeader() {
        this.firstBlockContainer.append(this.firstBlockHeader);
        this.firstBlockHeader.innerHTML = 'Hello, Welcome To My Oficcial Website!';
    }
    renderDesc() {
        this.firstBlockContainer.append(this.firstBlockDesc);
        this.firstBlockDesc.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis beatae ipsam aut, dignissimos eum laboriosam amet sint asperiores dolorem minus.';
    }
    renderBtn() {
        this.firstBlockContainer.append(this.firstBlockButton);
        this.firstBlockButton.innerHTML = 'See more...';
    }
    renderFirstBlock() {
        this.renderHeader();
        this.renderDesc();
        this.renderBtn();
        this.mainContainer.append(this.firstBlockContainer);
        this.firstBlockContainer.className = 'first-block-container';
    }
}
let firstScreen = new FirstScreen(mainContainer);
firstScreen.renderFirstBlock();