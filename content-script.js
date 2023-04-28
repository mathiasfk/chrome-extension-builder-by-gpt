console.log("init")
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('#create-application-marketplace-step').then((elm) => {
    console.log('Element is ready');
    
    const injectedCard = document.createElement('bds-paper');
    injectedCard.className = "option-card flex flex-column items-center pointer relative paper__elevation--static hydrated";
    injectedCard.innerHTML = `
    <bds-icon name="robot" size="brand" role="img" class="bds-icon bds-icon__size--brand hydrated" aria-label="robot" theme="outline"></bds-icon>
    <bds-typo variant="fs-20" bold="bold" margin="false" line-height="plus" translate="" class="hydrated">Construir usando GPT</bds-typo>
    <bds-typo variant="fs-14" translate="" class="hydrated">Construa seu chatbot usando uma descrição através do GPT. Recomendado para quem não tem muita experência com o Blip. Alguns ajustes manuais podem ser necessários.</bds-typo>
    `;
    injectedCard.onclick = () => console.log("hey");

    const container = elm.querySelector('.marketplace-step-options');

    container.appendChild(injectedCard);
    console.log("done");
});