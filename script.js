function changeTab(tabName) {
    const libraryContent = document.getElementById('library-content');
    const aboutContent = document.getElementById('about-content');
    const tabLibrary = document.getElementById('tab-library');
    const tabAbout = document.getElementById('tab-about');

    if (tabName === 'library') {
        libraryContent.style.display = 'grid';
        aboutContent.style.display = 'none';
        tabLibrary.classList.add('active');
        tabAbout.classList.remove('active');
    } 
    else if (tabName === 'about') {
        libraryContent.style.display = 'none';
        aboutContent.style.display = 'block';
        tabAbout.classList.add('active');
        tabLibrary.classList.remove('active');
    }
}