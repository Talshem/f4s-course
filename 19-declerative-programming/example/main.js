function addRow(dataArr) {
    const tableRef = document.getElementById("covid");
    const newRow = tableRef.insertRow(-1);
    dataArr.forEach((value, i) => {
        const newCell = newRow.insertCell(i);
        const newText = document.createTextNode(value);
        newCell.appendChild(newText);
    })
}

async function main(){
    const res = await fetch("https://api.covid19api.com/total/country/israel");
    const data = await res.json();
    console.log(data);
    
    const noCountry = data.map(({Country, ...rest}) => ({...rest}));
    const headers = Object.keys(noCountry[0]);
    addRow(headers);

    const filtered = noCountry.filter(({Confirmed,Deaths,Recovered,Active})=>(Confirmed+Deaths+Recovered+Active !== 0));
    const relative = filtered.map((d, i, all) => {
        if (i===0) return d;
        const {Confirmed: confirmed,Deaths: deaths,Recovered: recovered,Active: active, ...rest} = d
        return {
            ...rest,
            Confirmed: confirmed-all[i-1]["Confirmed"],
            Deaths: deaths-all[i-1]["Deaths"],
            Recovered: recovered-all[i-1]["Recovered"],
            Active: active-all[i-1]["Active"],
        }
    })

    relative.forEach(obj => addRow(Object.values(obj)));
    // document.getElementById("data").innerText = string;
}