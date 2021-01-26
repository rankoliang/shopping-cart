import { render } from '@testing-library/react';
import useTitle from './useTitle';

const TitleChanger = ({ page }) => {
  useTitle(page);

  return <div></div>;
};

describe('useTitle', () => {
  describe('when the component is mounted', () => {
    it('changes the title', () => {
      document.title = 'title';

      expect(() => render(<TitleChanger page="Title" />)).toChange(
        () => document.title,
        {
          from: 'title',
          to: 'Title - title',
        }
      );
    });
  });

  describe('when the component is unmounted', () => {
    it('reverts the title change', () => {
      document.title = 'title';
      const { unmount } = render(<TitleChanger page="Title" />);

      expect(unmount).toChange(() => document.title, {
        from: 'Title - title',
        to: 'title',
      });
    });
  });
});
