import React from "react";
import { connect } from "react-redux";

const ThemeProvider = ({ darkTheme, children }) => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
    return <div>
        {children}
    </div>
}

function mapStateToProps(state, props) {
    return { darkTheme: state.darkTheme };
}

export default connect(
    mapStateToProps
)(ThemeProvider);