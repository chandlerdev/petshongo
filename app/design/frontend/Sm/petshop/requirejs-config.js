var config = {
    map: {
        '*': {
            'bootstrap': 'js/bootstrap/bootstrap.min',
            'popper': 'js/bootstrap/popper',
            'jquerywow': 'js/jquery.wow',
            
        }
    },
    shim: {
        'popper': {
            'deps': ['jquery'],
            'exports': 'Popper'
        },
        'bootstrap': {
            'deps': ['jquery', 'popper']
        }
    },
    deps: [
        "js/bootstrap/bootstrap.min",
        "js/theme-js"
    ]
};