const addBlogBtn = document.getElementById('add-blog-btn');
const closeBlogBtn = document.getElementById('close-blog-btn');
const addBlogSection = document.querySelector('#overlay');
const blogContainer = document.querySelector('#blog-container');
const createBlogBtn = document.querySelector('#create-blog-btn');
const BlogImgUrl = document.querySelector('#post-url');
const BlogTitle = document.querySelector('#blog-title');
const BlogDesc = document.querySelector('#blog-desc');
const BlogContent = document.querySelector('#main-blog');

// Demo blog data                          
const demoBlog = [
    {
        ImgURL: 'https://i1.feedspot.com/200/3800699.jpg?t=1608385246',
        title: 'C Blog',
        desc: `C is a general-purpose programming language developed by Dennis Ritchie at Bell Laboratories in 1972. 
        Since then, it has become a major language not only at Bell Labs but also throughout the world.`,
        content: `C is a procedural language that provides no support for objects and classes. C++ is a combination of OOP and procedural programming languages.
        C has 32 keywords and C++ has 63 keywords.
        C supports built-in data types, while C++ supports both built-in and user-defined data types.
        C doesn't have access modifiers, whereas C++ does.
        C uses the <stdio.h> header file for input and output operations and C++ uses the <iostream.h> header file for input and output operations.
        C can't hide data, while C++ is secure and provides encryption.
        There's no direct exception handling support in C, but C++ supports it.
        C doesn't support function and operator overloading, but C++ does.
        In C, the main() function calls are made through other functions used in the code, but C++ doesn't provide that functionality.
        Reference variables aren't supported by C, but C++ supports them.`
    },
    {
        ImgURL: "https://brandwiser.co/wp-content/uploads/2023/05/overcome_interview_related_fear_blog-683x1024.png",
        title: " Overcoming Interview Fear: Take that First Step to Success! ",
        desc: ` Overcoming Interview Fear: Take that First Step to Success! `,
        content: ` Overcoming Interview Fear: Take that First Step to Success! 

        🔹 How to Overcome the Fear of Interviews?
        🔹 Let us begin this article by telling you that you are not alone if your hands shake and your knees turn to jelly when you step into a job interview.
        🔹 Be Prepared.
        
        💡 Practice & Practice.
        🙌 Keep Your Calm And Be Confident.
        
        🆘The most important thing in an interview is to maintain your calm. 
        At the time of giving a job interview, you must remain calm and confident. 
        If the panic stage goes wrong, you won’t be able to show yourself well. 
        So stay calm, pay attention to what they’re saying, think about it, and then answer. 
        At the time of the interview, the interviewer will be observing your mind as well as your body balance, 
        physical activity, state of mind, thinking, thoughts, and knowledge, hence it is essential that you remain cool, 
        relaxed, and confident.`
    },
    {
        ImgURL: 'https://starinformation.files.wordpress.com/2012/01/ms-dhoni-wallpaper-7.jpg',
        title: 'MS Dhoni – An Inspiration to Many',
        desc: 'An everyday man who went on to be popularly known as the ‘Captain Cool’ is none other than our very own Indian Men’s (ODI & T20Is) Cricket Team Captain, Mahendra Singh Dhoni or simply known as Dhoni.',
        content: `MS Dhoni – An Inspiration to Many

        Inspirational Start:-
        There was once a time when the Indian Cricket Team was simply filled with the city kids. 
        Due to excellent infrastructure and good scope for the game in cities, many small town boys would not succeed 
        defeating them in the Ranji Trophy. But this man proved it all wrong. MSD had seen a dream, which many feared 
        to see.
        Dhoni was not only known for his cricket but was also very popular for his lengthy wavy hair style. 
        In fact, it had then become a trend that every boy in the country now wanted to adorn the “Dhoni Hairstyle”.
        `
    }
];

addBlogBtn.addEventListener('click', () => {
    addBlogSection.classList.add('active-add-blog');
    document.body.style.overflow = 'hidden';
});

closeBlogBtn.addEventListener('click', () => {
    hideAddBlogModal();
});

function showBlog(title, imageUrl, description, content) {
    // Hide the blog container and show the individual blog content
    blogContainer.style.display = 'none';

    const blogContent = document.createElement('section');
    blogContent.id = 'blog-content';
    blogContent.classList.add('flex');

    const headerDiv = document.createElement('header');
    headerDiv.classList.add('flex');

    const leftContentDiv = document.createElement('div');
    leftContentDiv.classList.add('left-content', 'flex');

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const h3 = document.createElement('h3');
    h3.textContent = description;

    leftContentDiv.appendChild(h2);
    leftContentDiv.appendChild(h3);

    const rightContentDiv = document.createElement('div');
    rightContentDiv.classList.add('right-content');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'blog-image';

    rightContentDiv.appendChild(img);

    headerDiv.appendChild(leftContentDiv);
    headerDiv.appendChild(rightContentDiv);

    const mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('main-content');

    const p = document.createElement('p');
    p.textContent = content;

    mainContentDiv.appendChild(p);

    blogContent.appendChild(headerDiv);
    blogContent.appendChild(mainContentDiv);

    // Add the blog content to the body
    document.body.appendChild(blogContent);

    // Show the back button and hide the add blog button
    document.getElementById('back-btn').style.display = 'grid';
    document.getElementById('add-blog-btn').style.display = 'none';
}

function hideBlog() {
    // Show the blog container and remove the individual blog content
    blogContainer.style.display = 'flex';
    document.getElementById('blog-content').remove();

    // Show the add blog button and hide the back button
    document.getElementById('add-blog-btn').style.display = 'grid';
    document.getElementById('back-btn').style.display = 'none';
}

function createBlogPostElement(title, imageUrl, description, content) {
    const article = document.createElement('article');
    article.classList.add('blog', 'flex');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'blog-image';

    imageDiv.appendChild(img);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');

    const h1 = document.createElement('h1');
    h1.textContent = title;

    titleDiv.appendChild(h1);

    const descDiv = document.createElement('div');
    descDiv.classList.add('desc');

    const p = document.createElement('p');
    p.textContent = description;

    descDiv.appendChild(p);

    const readMoreBtn = document.createElement('button');
    readMoreBtn.id = 'read-more-btn';
    readMoreBtn.textContent = 'Read More';

    readMoreBtn.addEventListener('click', () => {
        window.scrollTo({top: 0})
        showBlog(title, imageUrl, description, content);
    });

    article.appendChild(imageDiv);
    article.appendChild(titleDiv);
    article.appendChild(descDiv);
    article.appendChild(readMoreBtn);

    return article;
}

function addBlogPost(title, imageUrl, description, content) {
    const blogData = {
        ImgURL: imageUrl,
        title,
        desc: description,
        content,
    };

    const blogPostElement = createBlogPostElement(
        title,
        imageUrl,
        description,
        content
    );

    blogContainer.appendChild(blogPostElement);

    let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs.push(blogData);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
}

function loadBlogPosts() {
    let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    if (existingBlogs.length > 0) {
        blogContainer.innerHTML = '';
        existingBlogs.forEach((blogData) => {
            const blogPostElement = createBlogPostElement(
                blogData.title,
                blogData.ImgURL,
                blogData.desc,
                blogData.content
            );
            blogContainer.appendChild(blogPostElement);
        });
    }
}

function addDemoBlogPosts() {
    for (const blogData of demoBlog) {
        const blogPostElement = createBlogPostElement(
            blogData.title,
            blogData.ImgURL,
            blogData.desc,
            blogData.content
        );
        blogContainer.appendChild(blogPostElement);
    }
}

function handleAddBlogFormSubmit(event) {
    event.preventDefault();

    const title = BlogTitle.value;
    const imageUrl = BlogImgUrl.value;
    const description = BlogDesc.value;
    const content = BlogContent.value;

    if (!title || !imageUrl || !description || !content) {
        alert('Please fill in all fields.');
        return;
    }

    addBlogPost(title, imageUrl, description, content);

    BlogTitle.value = '';
    BlogImgUrl.value = '';
    BlogDesc.value = '';
    BlogContent.value = '';

    hideAddBlogModal();
}

function hideAddBlogModal() {
    addBlogSection.classList.remove('active-add-blog');
    document.body.style.overflow = 'auto';
}

createBlogBtn.addEventListener('click', handleAddBlogFormSubmit);
window.addEventListener('load', loadBlogPosts);
window.addEventListener('load', addDemoBlogPosts);

// Back button functionality
const backButton = document.getElementById('back-btn');
backButton.addEventListener('click', hideBlog);