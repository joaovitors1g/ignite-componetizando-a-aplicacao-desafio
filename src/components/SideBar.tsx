import { GenreResponseProps } from '../App';
import { Button } from './Button';

type SideBarProps = {
  genres: GenreResponseProps[];
  handleSelectGenreId: (id: number) => void;
  selectedGenreId: number;
};

export function SideBar({
  genres,
  handleSelectGenreId,
  selectedGenreId,
}: SideBarProps) {
  function handleClickButton(id: number) {
    handleSelectGenreId(id);
  }

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
