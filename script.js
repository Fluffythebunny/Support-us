document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.glass-btn');
    
    const cashAppLinks = {
        'Zech': 'https://cash.app/$Pugls',
        'Colby': 'https://cash.app/$Colby',
        'Justin': 'https://cash.app/$Justin',
        'Charles': 'https://cash.app/$Charles'
    };

    const transitions = {
        'Zech': 'slideTransition',
        'Colby': 'circleTransition',
        'Justin': 'fadeTransition',
        'Charles': 'fadeTransition1'
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.textContent;
            const transition = document.querySelector('.page-transition');
            
            this.classList.add('clicked');
            transition.className = 'page-transition ' + transitions[name];
            
            setTimeout(() => {
                window.location.href = cashAppLinks[name];
            }, 1500);
        });
    });
});
