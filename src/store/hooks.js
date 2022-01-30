import {useRecoilState} from "recoil";
import {snippests} from "./atoms";

export const useAddSnippest = () => {
    const [items, setItems] = useRecoilState(snippests);
    return () => {
      setItems([
          ...items,
          {
              name: '',
              content: ''
          }
      ])
    };
  };