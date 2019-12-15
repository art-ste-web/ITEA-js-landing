let mainContainer = document.getElementById('main_container');

class MainMenuBlock {
    constructor(mainContainer) {
        this.mainContainer = mainContainer;
        this.menuContainer = document.createElement('div');
        this.menuHomeBtn = document.createElement('a');
        this.menuHomeBtnIcon = document.createElement('img');
        this.menuList = document.createElement('ul');
        this.menuItem = document.createElement('li');
        
    }
    renderHomeBtn() {
        this.menuContainer.append(this.menuHomeBtn);
        this.menuHomeBtn.setAttribute('href', '#');
        this.menuHomeBtn.className = 'home-button';
        this.menuHomeBtn.append(this.menuHomeBtnIcon);
        this.menuHomeBtnIcon.setAttribute('src', 'src/img/home.svg');
    }

    renderMenuList() {
       this.menuContainer.append(this.menuList);
       this.menuList.innerHTML = '<li><a href="#about">About</a></li> <li><a href="#portfolio">Portfolio</a></li> <li><a href="#blog">Blog</a></li> <li><a href="#team">Team</a></li> <li><a href="#contact">Contact</a></li>' 
    }

    renderMainMenu() {
        this.renderHomeBtn()
        this.renderMenuList();
        this.mainContainer.append(this.menuContainer);
        this.menuContainer.className = 'menu-container';
    }
}


class CreateBlock {
    constructor(mainContainer) {
        this.mainContainer = mainContainer;
        this.blockContainer = document.createElement('div');
        this.blockHeader = document.createElement('h1');
        this.blockParagraph = document.createElement('p');
        this.blockButton = document.createElement('button');
        this.blockImg = document.createElement('img');
        this.blockInnerDiv = document.createElement('div');
    }
    renderBlockContainer(blockIdName) {
        this.mainContainer.append(this.blockContainer);
        this.blockContainer.setAttribute('id', blockIdName);
        this.blockContainer.className = 'block';
    }
    renderBlockHeader(blockHeaderText) {
        this.blockContainer.append(this.blockHeader);
        this.blockHeader.innerHTML = blockHeaderText;
    }
    renderBlockParagraph(blockParagraphText) {
        this.blockContainer.append(this.blockParagraph);
        this.blockParagraph.innerHTML = blockParagraphText;
    }
    renderBlockButton(blockButtonText, btnAttrName, btnAttrValue) {
        this.blockContainer.append(this.blockButton);
        this.blockButton.innerHTML = blockButtonText;
        this.blockButton.setAttribute(btnAttrName, btnAttrValue);
    }
    renderBlockImg(imgSrc) {
        this.blockContainer.append(this.blockImg);
        this.blockImg.setAttribute('src', imgSrc);
    }
    renderInnerDiv(innerDivClassName) {
        this.blockContainer.append(this.blockInnerDiv);
        this.blockInnerDiv.className = innerDivClassName;
    }
    renderInnerDivId(innerDivId) {
        this.blockContainer.append(this.blockInnerDiv);
        this.blockInnerDiv.setAttribute('id', innerDivId);
    }

}


class FirstScreen extends CreateBlock {
    constructor(){
        super(mainContainer);
        
    }
    renderFirstScreen() {
        super.renderBlockContainer('first_block');
        super.renderBlockHeader('Hello, Welcome To My Oficcial Website!');
        super.renderBlockParagraph('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis beatae ipsam aut, dignissimos eum laboriosam amet sint asperiores dolorem minus.');
        super.renderBlockButton("See more...", "onclick", "javascript:document.location.href='#about'");
    }
}

class AboutBlock extends CreateBlock {
    constructor() {
        super(mainContainer);
    }
    renderAboutImg() {
        this.blockInnerDiv.append(this.blockImg);
        this.blockImg.setAttribute('src', 'src/img/my-photo.jpg');
    }
    renderAboutText() {
        this.blockInnerDiv.append(this.blockParagraph);
        this.blockParagraph.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus praesentium aspernatur natus alias atque, nostrum neque explicabo et, quam reiciendis illum laudantium aperiam tempore? Dolor, provident. Ut, ab ea!';
    }
    renderAbout() {
        super.renderBlockContainer('about');
        super.renderBlockHeader('About Me');
        super.renderInnerDiv('about-wrapper');
        this.renderAboutImg();
        this.renderAboutText();
    }
}
class PortfolioBlock extends CreateBlock {
    constructor() {
        super(mainContainer);
    }
    renderPortfolio() {
        super.renderBlockContainer('portfolio');
        super.renderBlockHeader('Portfolio');
    }

}
class BlogBlock extends CreateBlock {
    constructor() {
        super(mainContainer);
    }
    renderBlog() {
        super.renderBlockContainer('blog');
        super.renderBlockHeader('Blog');
        super.renderInnerDivId('cards_wrapper')
        
    }

}
class BlogPostCard {
    constructor(cardsWrapper) {
        this.cardsWrapper = cardsWrapper;
        this.cardContainer = document.createElement('div');
        this.cardImg = document.createElement('img');
        this.postTitle = document.createElement('h2');
        this.postContent = document.createElement('p');
        this.cardFooter = document.createElement('div');
        this.readPostBtn = document.createElement('button');
    }
    renderCardContainer(cardContainerClassName) {
        this.cardsWrapper.append(this.cardContainer);
        this.cardContainer.className = cardContainerClassName;
    }
    renderCardImg(cardImgSrc) {
        this.cardContainer.append(this.cardImg);
        this.cardImg.setAttribute('src', cardImgSrc);
    }
    renderPostTitle(postTitleText) {
        this.cardContainer.append(this.postTitle);
        this.postTitle.innerHTML = postTitleText;
    }
    renderPostContent(postContentText) {
        this.cardContainer.append(this.postContent);
        this.postContent.innerHTML = postContentText;
    }
    renderCardFooter(cardFooterClassName) {
        this.cardContainer.append(this.cardFooter);
        this.cardFooter.className = cardFooterClassName;
    }
    renderReadPostBtn(btnText) {
        this.cardFooter.append(this.readPostBtn);
        this.readPostBtn.innerHTML = btnText;
    }
    renderPostCard_1() {
        this.renderCardContainer('card-container');
        this.renderCardImg('src/img/post-img-1.jpg')
        this.renderPostTitle('New Post 1');
        this.renderPostContent('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus praesentium aspernatur natus.');
        this.renderCardFooter('card-footer');
        this.renderReadPostBtn('Read more...');

    }
    renderPostCard_2() {
        this.renderCardContainer('card-container');
        this.renderCardImg('src/img/post-img-1.jpg')
        this.renderPostTitle('New Post 2');
        this.renderPostContent('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus praesentium aspernatur natus.');
        this.renderCardFooter('card-footer');
        this.renderReadPostBtn('Read more...');

    }
    renderPostCard_3() {
        this.renderCardContainer('card-container');
        this.renderCardImg('src/img/post-img-1.jpg');
        this.renderPostTitle('New Post 3');
        this.renderPostContent('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus praesentium aspernatur natus.');
        this.renderCardFooter('card-footer');
        this.renderReadPostBtn('Read more...');

    }
}

class TeamBlock extends CreateBlock {
    constructor() {
        super(mainContainer);
    }
    renderTeam() {
        super.renderBlockContainer('team');
        super.renderBlockHeader('Our Team');
        super.renderInnerDivId('team_cards_wrapper')
        
    }

}
class TeamCard {
    constructor(teamCardsWrapper) {
        this.teamCardsWrapper = teamCardsWrapper;
        this.teamCardContainer = document.createElement('div');
        this.teamCardImg = document.createElement('img');
        this.teamDesc = document.createElement('p');
        this.teamOccupation = document.createElement('span');
    }
    renderTeamCardContainer(teamCardContainerClassName) {
        this.teamCardsWrapper.append(this.teamCardContainer);
        this.teamCardContainer.className = teamCardContainerClassName;
    }
    renderTeamCardImg(teamCardImgSrc) {
        this.teamCardContainer.append(this.teamCardImg);
        this.teamCardImg.setAttribute('src', teamCardImgSrc);
    }
    renderTeamDesc(teamDescText) {
        this.teamCardContainer.append(this.teamDesc);
        this.teamDesc.innerHTML = teamDescText;
    }
    renderTeamOccName(teamOccName) {
        this.teamCardContainer.append(this.teamOccupation);
        this.teamOccupation.innerHTML = teamOccName;
    }
    
    renderTeamCard_1() {
        this.renderTeamCardContainer('team-card-container');
        this.renderTeamCardImg('src/img/team-1.png')
        this.renderTeamDesc('John');
        this.renderTeamOccName('Manager');

    }
    renderTeamCard_2() {
        this.renderTeamCardContainer('team-card-container');
        this.renderTeamCardImg('src/img/team-1.png')
        this.renderTeamDesc('Ben');
        this.renderTeamOccName('Developer');

    }
    renderTeamCard_3() {
        this.renderTeamCardContainer('team-card-container');
        this.renderTeamCardImg('src/img/team-2.png')
        this.renderTeamDesc('Kate');
        this.renderTeamOccName('Designer');

    }
    renderTeamCard_4() {
        this.renderTeamCardContainer('team-card-container');
        this.renderTeamCardImg('src/img/team-1.png')
        this.renderTeamDesc('Jack');
        this.renderTeamOccName('Administrator');

    }
}

class ContactBlock extends CreateBlock {
    constructor() {
        super(mainContainer);
    }
    renderContact() {
        super.renderBlockContainer('contact');
        super.renderBlockHeader('Get In Touch');
        super.renderInnerDivId('contact_form_wrapper')
        
    }

}
class ContactForm {
    constructor(contactFormWrapper) {
        this.contactFormWrapper = contactFormWrapper;
        this.contactForm = document.createElement('form');
        this.formTextInput = document.createElement('input');
        this.formEmailInput = document.createElement('input');
        this.formSubmitInput = document.createElement('input');
        this.formTextarea = document.createElement('textarea');
    }
    render

    renderTextInput(inputTextPlaceholder) {
        this.contactForm.append(this.formTextInput);
        this.formTextInput.setAttribute('type', 'text');
        this.formTextInput.setAttribute('placeholder', inputTextPlaceholder);
    }
    renderEmailInput(inputEmailPlaceholder) {
        this.contactForm.append(this.formEmailInput);
        this.formEmailInput.setAttribute('type', 'email');
        this.formEmailInput.setAttribute('placeholder', inputEmailPlaceholder);
    }
    renderTextarea() {
        this.contactForm.append(this.formTextarea);
    }
    renderSubmitButton(buttonText) {
        this.contactForm.append(this.formSubmitInput);
        this.formSubmitInput.setAttribute('type', 'submit');
        this.formSubmitInput.setAttribute('value', buttonText);
    }

    renderForm() {
        this.contactFormWrapper.append(this.contactForm);
        this.renderTextInput(' Enter your name');
        this.renderEmailInput(' your@email.com');
        this.renderTextarea();
        this.renderSubmitButton('Send');
    }
}

/**
 * @desc render nav menu
*/
let mainMenu = new MainMenuBlock(mainContainer);
mainMenu.renderMainMenu();
/**
 * @desc render first screen
*/
let firstScreen = new FirstScreen(mainContainer);
firstScreen.renderFirstScreen();
/**
 * @desc render About block
*/
let aboutBlock = new AboutBlock(mainContainer);
aboutBlock.renderAbout();
/**
 * @desc render Portfolio block
*/
let portfolioBlock = new PortfolioBlock(mainContainer);
portfolioBlock.renderPortfolio();
/**
 * @desc render Blog block
*/
let blogBlock = new BlogBlock(mainContainer);
blogBlock.renderBlog();
/**
 * @desc render Post cards of Blog block
*/
let cardsWrapper = document.getElementById('cards_wrapper');
let blogPost1 = new BlogPostCard(cardsWrapper);
blogPost1.renderPostCard_1();
let blogPost2 = new BlogPostCard(cardsWrapper);
blogPost2.renderPostCard_2()
let blogPost3 = new BlogPostCard(cardsWrapper);
blogPost3.renderPostCard_3();
/**
 * @desc render Team block
*/
let teamBlock = new TeamBlock(mainContainer);
teamBlock.renderTeam();
/**
 * @desc render team member cards in Team block
*/
let teamCardsWrapper = document.getElementById('team_cards_wrapper');
let teamCard1 = new TeamCard(teamCardsWrapper);
teamCard1.renderTeamCard_1();
let teamCard2 = new TeamCard(teamCardsWrapper);
teamCard2.renderTeamCard_2();
let teamCard3 = new TeamCard(teamCardsWrapper);
teamCard3.renderTeamCard_3();
let teamCard4 = new TeamCard(teamCardsWrapper);
teamCard4.renderTeamCard_4();
/**
 * @desc render Contact block
*/
let contactBlock = new ContactBlock(mainContainer);
contactBlock.renderContact();
let contactFormWrapper = document.getElementById('contact_form_wrapper');
let formContactBlock = new ContactForm(contactFormWrapper);
formContactBlock.renderForm();


//скролл (доработать)

let links = document.querySelectorAll('.menu-container a');
let blocks = document.querySelectorAll('.block');
function scrollIt(element) {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop });
}
// for (let i=0; i<links.length; i++) {
//      links[i].addEventListener('click', function () {
//         for (let j=0; j<blocks.length; j++) {
//             scrollIt(blocks[i]);
//         } 
        
//     });
// };
links[0].addEventListener('click', function() {
    scrollIt(blocks[0]);
})
links[1].addEventListener('click', function() {
    scrollIt(blocks[1]);
})

console.log(links);
 console.log(blocks);






//slider
let root = document.getElementById('portfolio');
let images = [
    'src/img/slider-img/1.jpg',
    'src/img/slider-img/2.jpg',
    'src/img/slider-img/3.jpg',
    'src/img/slider-img/4.jpg',
    'src/img/slider-img/5.jpg',
]
class Slider {
    constructor(root, images) {
        this.root = root;
        this.SliderWrapper = document.createElement('div');
        this.urlImages = images;
        this.rightButton = document.createElement('button');
        this.leftButton = document.createElement('button');
        this.indexImage = 0;
    }

    renderImages() {
        this.urlImages.forEach(url => {
            let img = document.createElement('img');
            img.setAttribute('src', url);
            img.className = 'sliderImg';
            this.SliderWrapper.append(img);
        });
        
    }
    renderLeftBtn() {
        //this.leftButton.innerHTML ='назад';
        this.leftButton.classList.add('sliderControlBtnLeft');
        let images = document.querySelectorAll('#portfolio img');
        this.leftButton.onclick = () => {
            images[this.indexImage].classList.remove('showedImg');
            if (this.indexImage <=0) {
                this.indexImage = images.length - 1;
            }
            else this.indexImage--;
            images[this.indexImage].classList.add('showedImg');
            
        }
        this.SliderWrapper.append(this.leftButton);
    }

    renderRightBtn() {
        //this.rightButton.innerHTML ='вперед';
        this.rightButton.classList.add('sliderControlBtnRight');
        let images = document.querySelectorAll('#portfolio img');
        this.rightButton.onclick = () => {
            images[this.indexImage].classList.remove('showedImg');
            if (this.indexImage >= images.length -1) {
                this.indexImage = 0;
            }
            else this.indexImage++;
            images[this.indexImage].classList.add('showedImg');
            
        }
        this.SliderWrapper.append(this.rightButton);
       
    }
/**
* @desc render Slider - append slider to root el     
*/
    
    render() {
        this.SliderWrapper.className ='sliderWrapper';
        this.root.append(this.SliderWrapper);
        this.renderImages();
        this.renderLeftBtn();
        this.renderRightBtn(); 
        let images = document.querySelectorAll('#portfolio img');
        images[0].classList.add('showedImg');
    }
}
let slider1 = new Slider(root, images);
slider1.render();