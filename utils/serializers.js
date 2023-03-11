import SyntaxHighlighter from 'react-syntax-highlighter';

const serializers = {
    types: {
      myCodeField: (props) => (
            <div className='my-2'>
                <SyntaxHighlighter language={props.node.language}>
                    {props.node.code}
                </SyntaxHighlighter>
            </div>
        ),
    },
  }

  export default serializers;