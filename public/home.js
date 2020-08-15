const selects = document.querySelectorAll('select')

selects.forEach(select => {
    select.addEventListener('change', () => {
        if (select.options[select.options.selectedIndex].innerText.split(': ').length == 1) { // if name not already prepended 
            select.options[select.options.selectedIndex].prepend(`${select.dataset.prepend}: `)
        }

        if (select.id == 'primary-colour') {
            setFormColour(select.value)
        }
    })
})


function setFormColour(colour) {
    switch (colour) {
        case 'rgb(0, 128, 0)':
            document.body.style.setProperty('--primary-colour', 'rgb(0, 128, 0')
            document.body.style.setProperty('--select-background', 'rgb(182, 204, 174')
            document.body.style.setProperty('--select-background-hover', 'rgb(209, 223, 203)')
            document.body.style.setProperty('--submit-text-hover', 'rgb(219, 241, 210')
            document.body.style.setProperty('--submit-background-hover', 'rgb(22, 149, 22')
            break 

        case 'rgb(207, 31, 31)':
            document.body.style.setProperty('--primary-colour', 'rgb(207, 31, 31)')
            document.body.style.setProperty('--select-background', 'rgb(230, 191, 191)')
            document.body.style.setProperty('--select-background-hover', 'rgb(223, 203, 203)')
            document.body.style.setProperty('--submit-text-hover', 'rgb(250, 165, 165)')
            document.body.style.setProperty('--submit-background-hover', 'rgb(255, 55, 55)')
            break
            
        case 'rgb(255, 115, 0)':
            document.body.style.setProperty('--primary-colour', 'rgb(255, 115, 0)')
            document.body.style.setProperty('--select-background', 'rgb(204, 188, 174)')
            document.body.style.setProperty('--select-background-hover', 'rgb(223, 212, 203)')
            document.body.style.setProperty('--submit-text-hover', 'rgb(241, 224, 210)')
            document.body.style.setProperty('--submit-background-hover', 'rgb(250, 140, 38)')
            break

        case 'rgb(0, 140, 255)':
            document.body.style.setProperty('--primary-colour', 'rgb(0, 140, 255)')
            document.body.style.setProperty('--select-background', 'rgb(174, 191, 204)')
            document.body.style.setProperty('--select-background-hover', 'rgb(203, 214, 223)')
            document.body.style.setProperty('--submit-text-hover', 'rgb(210, 226, 241)')
            document.body.style.setProperty('--submit-background-hover', 'rgb(69, 171, 255)')
            break
    }
}