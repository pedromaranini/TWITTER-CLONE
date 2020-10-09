import React from 'react';

import Feed from '../Feed';

import { Container, 
        Banner, 
        Avatar, 
        ProfileData,
        HeartIcon, 
        LocationIcon, 
        CakeIcon,
        EditButton, 
        Followage } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Pedro Maranini</h1>
                <h2>@m4ranini</h2>

                <p>
                    Developer at <a href="https://www.oracle.com/br/index.html"> @oracledobrasil</a>
                </p>

                <ul>
                    <li>
                        <HeartIcon />
                        Em um relacionamento sério com <strong> @jujustefanoni</strong>
                    </li>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 21 de novembro de 2000
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong> 437 </strong>
                    </span>
                    <span>
                        <strong> 19.789 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    )
}

export default ProfilePage;