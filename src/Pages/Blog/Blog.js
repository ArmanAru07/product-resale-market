import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='lg:text-6xl text-center p-4'>Blog</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <p>
                        <ul>
                            <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                            <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                            <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <p>Secure: JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and send them to the client. The client then submits the JWT with every request.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <p>JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.
                        <br />  In this post, we will walk you through what JavaScript and Node.js are, and then we will demonstrate the differences between JavaScript and Node.js.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;