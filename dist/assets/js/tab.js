function TabD1Base(){const a=document.querySelector(".tab.d1.base"),c=a.querySelectorAll(".l_tab");c.forEach((e,t)=>{e.addEventListener("click",function(){c.forEach(e=>{e.classList.remove("active")}),this.classList.add("active"),a.querySelectorAll(".l_tab-page").forEach(e=>{e.classList.remove("active")}),a.querySelector(".l_tab-page:nth-child("+(t+1)).classList.add("active")})})}function TabD2Base(){const a=document.querySelector(".tab.d2.base"),c=a.querySelectorAll(".l_tab");c.forEach((e,t)=>{e.addEventListener("click",function(){c.forEach(e=>{e.classList.remove("active")}),this.classList.add("active"),a.querySelectorAll(".l_tab-page").forEach(e=>{e.classList.remove("active")}),a.querySelector(".l_tab-page:nth-child("+(t+1)).classList.add("active")})})}