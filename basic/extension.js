let myLeads = {
    "www.google.com": "google",
    "www.youtube.com": "youtube"
};

const leadNameEl = document.getElementById('input-lead-name-el');
const leadLinkEl = document.getElementById('input-lead-link-el')
const saveBtn = document.getElementById('save-btn');
const ulEl = document.getElementById('ul-el');

function renderLeads() {
    let leadsString = "";
    
    for (let key in myLeads) {
        if (!/^https?:\/\//i.test(key)) {
            url = `https://${key}`;
        }
        console.log(url)
        leadsString += `<li>
                            <a href="${url}" target="_blank">${myLeads[key]}</a>
                        </li>\n`;
    }
    ulEl.innerHTML = leadsString;
}

function saveInput(event) {
    event.preventDefault()
    myLeads[leadLinkEl.value] = leadNameEl.value;
    console.log(`Leads saved: ${myLeads}`);
    renderLeads();
    leadNameEl.value = "";
    leadLinkEl.value = "";
}

renderLeads()
saveBtn.addEventListener("click", saveInput)



