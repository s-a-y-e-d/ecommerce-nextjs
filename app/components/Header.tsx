'use client';

import Link from 'next/link';
import './header.css'
import CartLink from './CartLink';
import Image from 'next/image';

import { useState, useEffect, useRef } from 'react';
import { searchProducts } from '@/lib/data';
import { Product } from '@/app/generated/prisma';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim().length > 0) {
        setIsLoading(true);
        try {
          const results = await searchProducts(searchQuery);
          setSearchResults(results);
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  const handleProductClick = (slug: string) => {
    setSearchQuery('');
    setIsFocused(false);
    router.push(`/${slug}`);
  };

  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link href="/" className="header-link">
            <Image className="logo"
              src="/images/logo-white.png"
              alt='something'
              height={26}
              width={177.219}
            />
            <Image className="mobile-logo"
              src="/images/mobile-logo-white.png"
              alt='something'
              height={26}
              width={22.531}
            />
          </Link>
        </div>

        <div className="middle-section" ref={searchRef}>
          <div className="search-container">
            <div className="search-wrapper">
              <input
                className="search-bar"
                type="text"
                placeholder="Search products…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
              />
              {searchQuery && (
                <button
                  className="clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {isFocused && (searchQuery.length > 0 || searchResults.length > 0) && (
              <div className="search-results-popup">
                {isLoading ? (
                  <div className="search-loading">Loading...</div>
                ) : searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <div
                      key={product.id}
                      className="search-result-item"
                      onClick={() => handleProductClick(product.slug)}
                    >
                      <div className="search-result-image-container">
                        <Image
                          src={product.image.startsWith('/') || product.image.startsWith('http') ? product.image : `/${product.image}`}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="search-result-image"
                        />
                      </div>
                      <div className="search-result-info">
                        <div className="search-result-name">{product.name}</div>
                        <div className="search-result-price">${(product.priceCents / 100).toFixed(2)}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="search-no-results">No products found</div>
                )}
              </div>
            )}
          </div>

        </div>

        <div className="right-section">

          <Link className="orders-link header-link" href="/orders">
            <span className="orders-text">Orders</span>
          </Link>

          <CartLink />

        </div>
      </div>
    </>
  );
}