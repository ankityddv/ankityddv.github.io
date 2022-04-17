
function loadFooter() {
    document.getElementById("footer").innerHTML = `
    <div class="footer">
        <div class="left-section">
            <div class="top-text">
                <h1>Let’s start something together. <br><br> Start by <a href="social.html">saying hi</a></h1>
                <h2>🤝 Social</h2>
                <h3><a href="social.html">@ankityddv</a></h3>
                <h4><a href="mailto:yadavankit840@gmail.com">yadavankit840@gmail.com</a></h4>
            </div>
        </div>

        <!-- 👇 ONLY VISIBLE TO DESKTOP USERS -->
        <div class="right-section">
            <ul id="navigation3" class="nav-links-footer"></ul>
        </div>
    </div>

    <div class="copyright">
        <p>© 2022. All rights reserved.</p>
    </div>
    `;
}