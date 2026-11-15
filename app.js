const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const rates = { "10": { "720p": 30, "1080p": 45, "4K": 90 }, "20": { "720p": 60, "1080p": 90, "4K": 180 }, "30": { "720p": 90, "1080p": 135, "4K": 270 } };
const state = { style: "Animation", format: "16:9", duration: "10", quality: "720p", credits: 600 };
let toastTimer;
function cost(){ return rates[state.duration][state.quality]; }
function updateEstimate(){ $("#costValue").textContent = cost(); $("#balanceValue").textContent = state.credits; $("#sideCredits").textContent = state.credits; }
function showToast(message){ const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2800); }
function openModal(title,message){ $("#modalTitle").textContent=title;$("#modalText").textContent=message;$("#modal").hidden=false; }
function selectCards(selector,attribute,key){ $$(selector).forEach(btn=>btn.addEventListener("click",()=>{ $$(selector).forEach(x=>x.classList.remove("selected"));btn.classList.add("selected");state[key]=btn.dataset[attribute];updateEstimate(); })); }
selectCards(".style-card","style","style");
selectCards(".format-card","format","format");
selectCards(".choice","duration","duration");
selectCards(".quality-choice","quality","quality");
$("#scriptInput").addEventListener("input",e=>{const v=e.target.value;const words=v.trim()?v.trim().split(/\s+/).length:0;$("#wordCount").textContent=words+" words · "+v.length.toLocaleString()+" / 5,000 characters";});
$("#sampleBtn").addEventListener("click",()=>{const sample="At the edge of a quiet city, a tiny paper boat begins an unexpected journey. It drifts through glowing streets, under bridges of light, and into a hidden garden where the stars seem close enough to touch. A small adventure becomes a reminder that wonder can be found anywhere.";$("#scriptInput").value=sample;$("#scriptInput").dispatchEvent(new Event("input"));showToast("Sample script added. Make it your own!");});
$("#generateBtn").addEventListener("click",()=>{const script=$("#scriptInput").value.trim();if(!script){$("#scriptInput").focus();showToast("Add your script first to continue.");return;}if(script.length<20){$("#scriptInput").focus();showToast("Add a little more detail to your idea.");return;}if(cost()>state.credits){openModal("Not enough credits","This generation needs "+cost()+" credits, but your preview balance is "+state.credits+". Choose a lower-cost setting or upgrade your plan.");return;}openModal("Your studio is ready for the next step","Your settings are saved in this preview: "+state.style+", "+state.format+", "+state.duration+" seconds, "+state.quality+". Estimated cost: "+cost()+" credits. Real video generation is not connected yet; an AI video API and secure backend must be added before jobs can run.");});
$("#modalClose").addEventListener("click",()=>$("#modal").hidden=true);
$("#modalAction").addEventListener("click",()=>$("#modal").hidden=true);
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")$("#modal").hidden=true;});
$("#upgradeSide").addEventListener("click",()=>openModal("Clipora AI plans","The planned Creator plan is $39/month with a proposed 600 monthly credits. Checkout will be connected after the payment provider is selected and tested."));
$("#helpBtn").addEventListener("click",()=>openModal("Welcome to Clipora AI","Paste a script, choose a visual style and video format, then set duration and quality. This is the first interactive product preview."));
$("#viewAll").addEventListener("click",()=>showToast("Your generated projects will appear here."));
$("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$$(".nav-link").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<800)$("#sidebar").classList.remove("open");}));
updateEstimate();