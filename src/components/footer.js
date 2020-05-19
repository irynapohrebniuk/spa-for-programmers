

const footer = () => {
    const footer = $('<footer id="footer" class="bg-light">')
    const text = '<h6>&copy; Copyright Hotel SPA 2020</h6>'
    footer.append(text)
    
    return footer
}
export { footer }