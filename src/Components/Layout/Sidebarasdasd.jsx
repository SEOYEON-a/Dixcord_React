import React from 'react';
import styled from 'styled-components';

const LeftSidebar = styled.div`
    display: flex;
    flex-direction: column;
`;

const SidebarHeader = styled.div`
    display: flex;
    flex-direction: column;

`;

function Sidebar({data}) {
    return (
        <div>
            <LeftSidebar>
                <SidebarHeader>
                    <div>홈버튼</div>
                    <div>채팅룸</div>
                    <div>친구</div>
                    <div>설정</div>
                </SidebarHeader>
                <div>
                    로그아웃
                </div>
            </LeftSidebar>
            {
            data === 'option' ? null 
            : 
            data === 'room' ? 
            <div>
                방관련
            </div>
            :
            <div>
                친구관련
            </div>
            }
        </div>
    );
}

export default Sidebar;