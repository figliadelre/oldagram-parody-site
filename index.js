const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 219
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 14
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const timeLineEl = document.getElementById("timeline")

function buildTimeline() {
    for (let i = 0; i < posts.length; i++) {
        const item = posts[i]        
        const newPostTemplate = `
        <div class="container">
        <section class="post-container">
            <div class="post-header">
                <img src="${item.avatar}" class="poster-avatar" alt="User avatar">
                <div class="poster-info">
                    <h1 class="poster-name">${item.name}</h1>
                    <h2 class="poster-location">${item.location}</h2>
                </div>
            </div>
        </section>
            
        <img src="${item.post}" class="post-img" alt="main post image">

        <section class="post-container">
            <div class="post-footer">
                <div class="btn like on">
                    <img src="images/icon-heart.png" class="heart-empty">
                    <img src="images/icon-heart-filled.png"  class="heart-full">
                </div>
                <img src="images/icon-comment.png" class="btn comment">
                <img src="images/icon-dm.png" class="btn dm">
            </div>
            
            <span class="like-count"><span class="total-likes">${item.likes}</span> likes</span>
            
            <div class="caption">
                <p class="post-username post-caption"><strong>${item.username}</strong> ${item.comment}</p>
            </div>
            
            <div class="comments">
                <p class="comments-thread"><strong>michelangelOG</strong> Slay.</p>
            </div>
        </section>
        </div>`

        timeLineEl.innerHTML += newPostTemplate
    }
}

function setupLikeButton() {
    document.querySelectorAll(".like").forEach(btn => btn.addEventListener("click", toggleLike));
}

function toggleLike() {
    const likesEl = this.parentElement.nextElementSibling.firstElementChild
    let count = Number(likesEl.textContent)
    if (this.classList.contains("on")) {
        count--
    } else {
        count++
    }
    this.classList.toggle("on")
    likesEl.textContent = count
}

buildTimeline()
setupLikeButton()