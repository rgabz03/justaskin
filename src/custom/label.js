import React from 'react';

export default class Label extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps){
        return nextProps.html !== this.nodeSelect.innerHTML;
    }

    componentDidUpdate() {
            if ( this.props.html !== this.nodeSelect.innerHTML ) {
               this.nodeSelect.innerHTML = this.props.html;
            }
           
        }
  
 emitChange = () => {
        var html = this.nodeSelect.innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;
}

render() {
    const { ...otherAttributes } = this.props;
    return(
      <p ref={(ref) => {this.nodeSelect = ref} }
            onInput={this.emitChange} 
            onBlur={this.emitChange}
            contentEditable
            dangerouslySetInnerHTML={{__html: this.props.html}}>{this.props.value}</p>
    )
    }
}

