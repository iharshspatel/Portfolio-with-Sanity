import React from 'react'
import useGetBlogDetails from '../../fetchers/blog'
import SyntaxHighlighter from 'react-syntax-highlighter';
import BlockContent from "@sanity/block-content-to-react";
import { useParams } from "react-router-dom";
import Container from '../Layouts/Container/Container';
import Styles from './BlogDetails.module.css'
import BlogDetailsShimmer from './BlogDetailsShimmer';

const serializers = {
    types: {
        myCodeField: (props) => (
            <div className={Styles.codeBlock}>
                <SyntaxHighlighter language={props.node.language}>
                    {props.node.code}
                </SyntaxHighlighter>
            </div>
        ),
    },
}


const BlogDetails = () => {
    const { slug } = useParams();
    let [postData,loading] = useGetBlogDetails(slug)
    return (
        <Container>
            
            {
            loading ? <BlogDetailsShimmer/> :
            (postData &&
                <div className={Styles.blogDetailsContainer}>
                    <div>
                        <h2 className={Styles.title}>{postData.title}</h2>
                        <div>
                        </div>
                    </div>
                    <div className='code-block'>
                        <BlockContent
                            blocks={postData.body}
                            serializers={serializers}
                        />
                    </div>
                </div>)}
        </Container>
    )
}

export default BlogDetails