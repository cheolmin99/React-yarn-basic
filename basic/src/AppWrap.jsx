import React from 'react'

export default function AppWrap() {
    return (
        <div>
            <Navibar>
                <Avatar 
                    image="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2020%2F07%2F01%2F202007010819312410_7_20200701082114665.jpg&type=a340"
                    name="bob"
                    size={200}
                />
            </Navibar>

            <Navibar>
                <p>안녕하세요!</p>
            </Navibar>
        </div>
    )
}

function Navibar({children}) {
    return (
        <header style={{ backgroundColor: 'yellow' }}>
            {children}
        </header>
    )
}

function Avatar({ image, name, size }) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: '50%' }}
            />
        </div>
    )
}
