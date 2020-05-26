import React, { useState, useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search, ChevronRight } from 'react-feather';
import { SearchWrapper, ResultSearch, LabelIcon } from './styled';
import { ContextSearch } from '../../context/SearchContext';
import { ContextMobile } from '../../context/MobileContext';

const Buscador = () => {
  const contextSearch = useContext(ContextSearch);
  const { results, getResultsSearch } = contextSearch;

  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  const [searchON, setSearchOn] = useState(modeMobile ? false : true);
  const [textSearch, setTextSearch] = useState('');

  const router = useRouter();

  /** AbortController probando feature */
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getResultsSearch(textSearch, signal);

    return () => {
      controller.abort();
    };
  }, [textSearch]);

  const handleChange = (e) => {
    setTextSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && textSearch) {
      router.push(`/search?query=${textSearch}`);
    }
  };

  const handleInput = () => {
    if(modeMobile) {
      setSearchOn(!searchON);
      setTextSearch('');
    }
  };

  function showResultSearch() {
    return results.map((result) => (
      <Link
        href={`/producto/[id]`}
        as={`/producto/${result._id}`}
        key={result._id}
      >
        <a arial-label="title product"><ChevronRight size={15} />{result.title}</a>
      </Link>
    ));
  }

  return (
    <>
        <LabelIcon htmlFor="search" onClick={handleInput}>
          <Search />
        </LabelIcon>
        {searchON && (
          <SearchWrapper modeMobile={modeMobile}>
            <input
              type="text"
              id="search"
              placeholder="Buscar..."
              value={textSearch}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              onBlur={handleInput}
            />
          </SearchWrapper>
        )}
      {results.length !== 0 && <ResultSearch modeMobile={modeMobile}>{showResultSearch()}</ResultSearch>}
    </>
  );
};

export default React.memo(Buscador);