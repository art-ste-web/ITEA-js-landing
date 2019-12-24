//main container of page
const mainContainer = document.getElementById('main_container');
//main menu items
const menuItemsNames = ['About', 'Portfolio', 'Blog', 'Team', 'Contact'];
//page content
//blockHeaders
const blockHeaders = {
    firstScreen: 'Hello, Welcome To My Oficcial Website!',
    about: 'About Me',
    portfolio: 'Portfolio',
    blog: 'Blog',
    team: 'Team',
    contact: 'Get In Touch'
}
//block text content
const blockText = {
    firstScreen: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis beatae ipsam aut, dignissimos eum laboriosam amet sint asperiores dolorem minus.',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus praesentium aspernatur natus alias atque, nostrum neque explicabo et, quam reiciendis illum laudantium aperiam tempore? Dolor, provident. Ut, ab ea!',
}
//images
const blockImgPath = {
    homeBtn: 'src/img/home.svg',
    aboutImg: 'src/img/my-photo.jpg',
}
//blog cards data
const blogCardsData = [
    {
        img: 'src/img/post-img-1.jpg',
        title: 'New Post 1',
        excerpt: '1 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus praesentium aspernatur natus.'
    },
    {
        img: 'src/img/post-img-1.jpg',
        title: 'New Post 2',
        excerpt: '2 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus praesentium aspernatur natus.'
    },
    {
        img: 'src/img/post-img-1.jpg',
        title: 'New Post 3',
        excerpt: '3 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus praesentium aspernatur natus.'
    }
]

//parse blog cards data
let blogCardImgs = blogCardsData.map(element => {
    return element.img;
});
let blogCardTitles = blogCardsData.map(element => {
    return element.title;
});
let blogCardExcerpts = blogCardsData.map(element => {
    return element.excerpt;
});
// console.log(blogCardImgs);
// console.log(blogCardTitles);
// console.log(blogCardExcerpts);

//team cards data
const teamCardsData = [
    {
        photo: 'src/img/team-1.png',
        name: 'John',
        post: 'Manager'
    },
    {
        photo: 'src/img/team-1.png',
        name: 'Ben',
        post: 'Developer'
    },
    {
        photo: 'src/img/team-2.png',
        name: 'Kate',
        post: 'Designer'
    },
    {
        photo: 'src/img/team-1.png',
        name: 'Jack',
        post: 'Administrator'
    }
]
//parse team cards data
let teamCardPhotos = teamCardsData.map(element => {
    return element.photo;
});
let teamCardNames = teamCardsData.map(element => {
    return element.name;
});
let teamCardPosts = teamCardsData.map(element => {
    return element.post;
});
// console.log(teamCardPhotos);
// console.log(teamCardNames);
// console.log(teamCardPosts);