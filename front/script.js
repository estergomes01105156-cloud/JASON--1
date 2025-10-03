const resultsDiv = document.getElementById("results")

async function fetchConfectionery(){
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch('../Dados/dados.json')
        const data = await response.json()
        

        if(data.error){
             resultsDiv.innerHTML ="<p>Erro ao buscar pelo funcionarios!</p>"
             return
        }
        resultsDiv.innerHTML = ''

        data.forEach(item => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}"
            <h2>${item.nome}</h2>
            <h3>${item.categoria}</h3>
            <h4>${item.setor}</h4>
            <p>$${item.salario.toFixed(2)}</p>
        `

        resultsDiv.appendChild(card)
    });

    } catch (error) {
        resultsDiv.innerHTML ="<p>Erro ao buscar pelo funcionarios!</p>"
    }

}

fetchConfectionery()
