import React from 'react';

import {Layout} from '../components/layout/layout';
import SEO from '../components/seo';
import {Link} from 'gatsby';
import {Modal} from '../components/modal/modal';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - Не найдено"/>
    <Modal visible closeButtonHidden>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <h1 style={{
          textAlign: "center",
        }}>
          Хм, кажется, здесь что-то было...
        </h1>
        <p style={{
          textAlign: "center",
        }}>
          Но, похоже, мы не можем найти то, что вам нужно.
        </p>
        <Link to={"/"}>Вернуться на главную</Link>
      </div>
    </Modal>
  </Layout>
);

export default NotFoundPage;
