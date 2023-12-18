import styled from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.section`
  margin-top: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const TagTitle = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
  margin-right: 72px;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = ({ setTag }) => {
  return (
    <TagsContainer>
      <TagTitle>Busque por tags:</TagTitle>
      {tags.map((tag) => (
        <Tag
          key={tag.id}
          onClick={() => {
            setTag(tag.tag);
          }}
        >
          {tag.titulo}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;
