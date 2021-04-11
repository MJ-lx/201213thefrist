const headerEl=document.querySelector("header");
const scrollToTop = document.querySelector(".scorllToTop");

//监听页面滚动事件
window.addEventListener("scroll",()=>{
	let height =headerEl.getBoundingClientRect().height;
	// 固定导航栏
	if(window.pageYOffset-height>800){
		if(!headerEl.classList.contains("sticky")){
			headerEl.classList.add("sticky");
		}
	}
	else{
		headerEl.classList.remove("sticky");
	}
	//显示回到顶部按钮
	if(window.pageYOffset-height>2000){
		scrollToTop.style.display = "block";
	}
	else{
		scrollToTop.style.display = "none";
	}
});

const glide = new Glide(".glide");
const captionsEl =document.querySelectorAll(".slide-caption");


// //监听加载后和轮播后两个事件
// glide.on(["mount.after","run.after"],() => { //箭头函数
// 	const caption =captionsEl[glide.index];
// 	for(obj in caption.children)
// 	{
// 		change(obj,{opacity:100});
// 	}
// });

// glide.on("run.before",() => {
// 	document.querySelectorAll(".slide-caption>*").forEach(el => {
// 		el.style.opactiy = 0;
// 	});
// });

glide.mount();


const isotope = new Isotope(".cases",{
	layoutMode:"fitRows",
	itemSelector:".case-items"
});

const filterBtns =document.querySelectorAll(".filter-btns");

// filterBtns.addEventListener("click", e =>{
// 	let {target} = e
// 	const filterOption = target.getAttribute("data-filter");
// 	if(filterOption){
// 		document.querySelectorAll(".filter-btn.active").forEach(btn =>
// 		btn.classList.remove("active"));
// 		target.classList.add("active");
// 	}
// 	isotope.arrange({filter:filterOption});
// });

const staggeringOption = {
	delay:300,
	distance:"50px",
	duration:500,
	easing:"ease-in-out",
	origin:"bottom"
};

ScrollReveal().reveal(".feature",{...staggeringOption,interval:350});
ScrollReveal().reveal(".service-item",{...staggeringOption,interval:350});

const dataSectionEl = document.querySelector(".data-section");
ScrollReveal().reveal(".data-section",{
	beforeReveal:() =>{
		anime({
			targets:".data-piece .num",
			innerHTML: el =>{
				return [0,el.innerHTML];
			},
			duration:2000,
			round:1,//变动步长
			easing:"easeInExpo"//动画效果逐渐变快
		});
	}
});

window.addEventListener("scroll",() =>{
	const bottom = dataSectionEl.getBoundingClientRect().bottom;
	const top = dataSectionEl.getBoundingClientRect().top;
	
	if(bottom>=0 && top<=window.innerHeight){
		dataSectionEl.style.backgroundPosition = `center calc(50% - ${bottom / 5}px)`;
	};
});

//平滑滚动
const scroll = new SmoothScroll('nav a[href*="#"], .scorllToTop a[href*="#"]',{
	header:"header",
	offset: 80
});
document.addEventListener("scrollStart",()=>{
	if(headerEl.classList.contains("open")){
		headerEl.classList.remove("open");
	}
});

//探索更多按钮点击事件绑定
const exploreBtnEls = document.querySelectorAll(".explore-btn");
exploreBtnEls.forEach(exploreBtnEl =>{
	exploreBtnEl.addEventListener("click",() =>{
		scroll.animateScroll(document.querySelector("#about_us"));
	});
});

//响应式操作
const burgetEl = document.querySelector(".burger");
burgetEl.addEventListener("click",() =>{
	headerEl.classList.toggle("open");
});


