import React from 'react';

export function Footer() {
    return(
        <footer className="footer">
            <div className="row">
                <div className="col-1-of-3">
                    <p>Image Courtesy of <a href="https://unsplash.com/" className="footer__link">Unsplash</a></p>
                    <p>Logo Courtesy of <a href="https://www.freelogodesign.org/" className="footer__link">FreeLogo</a></p>
                    <p>Design by <a href="https://github.com/whgusgh135" className="footer__link">Kevin Cho</a></p>
                </div>
                <div className="col-2-of-3">
                    <p>Build and Designed by Kevin Cho for CSS projects. Copyright &copy; by Kevin Cho. 
                    You are 100% allowed to use this webpage for both personal and commercial use, 
                    but NOT to claim it as your own design. A credit to the original author, Kevin Cho, is highly appreciated. </p>
                </div>
            </div>
        </footer>
    )
}