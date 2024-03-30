const postsContainer = [
    {
        header: "المقالة 1",
        title: "وصف المقالة وماتحتوية من نصوص",
        content: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam minima veritatis sunt rerum animi incidunt pariatur hic, accusamus, autem rem est cum possimus praesentium placeat facilis ratione corrupti. Molestiae, consequatur reprehenderit dicta a facere amet, magnam eum corrupti, eligendi ipsum quia laboriosam exercitationem excepturi architecto error eius mollitia. Maiores obcaecati eaque eius alias! Minus doloremque quos nulla ratione! In modi earum, architecto quidem amet ullam illo, eveniet laboriosam officiis, animi reiciendis ad veritatis aliquid non! Fugiat, earum consequuntur! Quod dicta itaque beatae, error architecto hic ipsa cumque, sequi perferendis vitae dolores fugiat aspernatur saepe velit atque veritatis deleniti, vero rem voluptas? Sit ullam maiores inventore possimus eius consequuntur corporis odit, quisquam optio in facilis atque autem pariatur, asperiores quod delectus sequi, accusantium ratione illum dolorem aut sunt laudantium. Animi laborum quia similique in incidunt sunt impedit, magni necessitatibus qui aut dolores corporis molestias expedita voluptates? Culpa quo, maiores pariatur nisi unde modi laudantium harum nemo quod sint adipisci maxime inventore, esse dolores, est quibusdam eaque. Dignissimos nulla porro saepe enim rem perferendis architecto recusandae necessitatibus optio eos, reprehenderit sequi quisquam omnis veniam voluptatem aliquid molestiae, suscipit harum officiis impedit. Dolor cum necessitatibus libero adipisci doloremque quidem, aperiam eaque ratione?
        `,
        img: './assets/img/logo1.png'
    },
    {
        header: "المقالة 2",
        title: "وصف المقالة وماتحتوية من نصوص",
        latestUpdate: "اخر تحديث منذ 3 دقائق",
        img: './assets/img/logo1.png'
    },
    {
        header: "المقالة 3",
        title: "وصف المقالة وماتحتوية من نصوص",
        latestUpdate: "اخر تحديث منذ 3 دقائق",
        img: './assets/img/logo1.png'
    },
    {
        header: "المقالة 4",
        title: "وصف المقالة وماتحتوية من نصوص",
        latestUpdate: "اخر تحديث منذ 3 دقائق",
        img: './assets/img/logo1.png'
    },
    {
        header: "المقالة 5",
        title: "وصف المقالة وماتحتوية من نصوص",
        latestUpdate: "اخر تحديث منذ 3 دقائق",
        img: './assets/img/logo1.png'
    },
    {
        header: "المقالة 6",
        title: "وصف المقالة وماتحتوية من نصوص",
        latestUpdate: "اخر تحديث منذ 3 دقائق",
        img: './assets/img/logo1.png'
    },
    {
        header: "المقالة 7",
        title: "وصف المقالة وماتحتوية من نصوص",
        latestUpdate: "اخر تحديث منذ 3 دقائق",
        img: './assets/img/logo1.png'
    },
    {
        header: "المقالة 7",
        title: "وصف المقالة وماتحتوية من نصوص",
        latestUpdate: "اخر تحديث منذ 3 دقائق",
        img: './assets/img/logo1.png'
    },
    {
        header: "المقالة 8",
        title: "وصف المقالة وماتحتوية من نصوص",
        latestUpdate: "اخر تحديث منذ 3 دقائق",
        img: './assets/img/logo1.png'
    },
    {
        header: "المقالة 9",
        title: "وصف المقالة وماتحتوية من نصوص",
        latestUpdate: "اخر تحديث منذ 3 دقائق",
        img: './assets/img/logo1.png'
    },
]

let postsData = '';
const posts = document.querySelector('#posts');
let index = 0; 
postsContainer.forEach((element) => {
    if(index===0 || index % 5 === 0) {
        postsData += `
        <a href="#" data-index="${index}" class="d-block text-decoration-none flex-grow-1" onClick="showArticle(this)">
            <div class="card mb-3">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src='${element.img}' class="img-fluid rounded-start h-100" alt=${element.header}>
                </div>
                <div class="col-md-8">
                    <div class="card-body h-100 py-5 text-center d-flex flex-column align-items-center justify-content-center">
                    <h5 class="card-title">${element.header}</h5>
                    <p class="card-text">${element.title}</p>
                    </div>
                </div>
                </div>
            </div>
        </a>
    `
    index ++; 

    }else{
        postsData += `
        <a href="#" data-index="${index}" class="d-block text-decoration-none flex-grow-1" onClick="showArticle(this)">
            <div class="card mb-3" style="max-width: 520px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src='${element.img}' class="img-fluid rounded-start h-100" alt=${element.header}>
                </div>
                <div class="col-md-8">
                    <div class="card-body py-5">
                    <h5 class="card-title">${element.header}</h5>
                    <p class="card-text">${element.title}</p>
                    </div>
                </div>
                </div>
            </div>
        </a>
`
index ++; 

    }
}); 
posts.innerHTML = postsData;

function showArticle(a) {

    let index = a.getAttribute('data-index');
    document.getElementsByTagName('body')[0].innerHTML = `
    <a href="./blog-posts.html" class="d-inline-block m-4 p-4 fs-5">العودة لصفحة المقالات </a>
    <div class="container card border-0 mb-4">
        <img class="card-img img-fluid w-75 mx-auto mb-4" style="height:270px" src="${postsContainer[index].img}">
        <h1 class="text-center py-4">${postsContainer[index].header}</h1>
        <p>
        ${postsContainer[index].content}
        </p>
    </div>
    `
}