import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const ItemStyle = styled.div`
    width: 33%;
    padding: 24px;
`

const Image = styled.div`
    width: 100%;
    height: 200px;
    background: url('${props => props.image}');
    background-size: cover;
    background-position: center;
`

const Name = styled.h4``

const ItemsGrid = ({ items, onItemClick }) => {
    return (
        <Wrapper>
            {
                items.map(item => (
                    <ItemStyle key={item._id}>
                        <Image
                            onClick={e => onItemClick(item, e)}
                            image={item.picture}
                        />
                        <Name>{item.name}</Name>
                    </ItemStyle>
                ))
            }
        </Wrapper>
    )
}
ItemsGrid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    })).isRequired,
    onItemClick: PropTypes.func
}

export default ItemsGrid