"use client";

import styles from "./Profile.module.css";
import { Button, Card, Flex, Typography, Skeleton } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <>
          <Skeleton.Avatar active size={300} shape="circle" className={styles.image} />
          <Skeleton.Input active size="large" style={{ width: 300, height: 40, margin: "20px 0" }} />
          <Skeleton active paragraph={{ rows: 6 }} />
        </>
      ) : (
        <Card hoverable className={styles.card}>
          <Flex justify="space-between">
            <div className={styles.imageContainer}>
              <Image
                src="/images/aluno3.jpg"
                alt="Profile Picture"
                fill
                className={styles.image}
              />
            </div>

            <Flex vertical align="flex-end" justify="space-around">
              <div>
                <Typography.Title level={3}>Evelyn Oliveira</Typography.Title>
                <Typography.Title level={5} type="success">
                  Curso: Desenvolvimento de Software
                </Typography.Title>
                <Typography.Paragraph>
                  {" "}
                  Projeto desenvolvido usando:{" "}
                </Typography.Paragraph>
                <ul className={styles.list}>
                  <li>Axios</li>
                  <li>AntD</li>
                  <li>SessionStorage</li>
                  <li>Toastify</li>
                  <li>CSS Modules</li>
                  <li>Hook</li>
                  <li>PreLoad</li>
                  <li>PreFetch</li>
                  <li>Link / Next</li>
                  <li>Image / Next</li>
                  <li>NodeJS</li>
                  <li>E muito amor 💖</li>
                </ul>
              </div>
              <Link href="/alunos" prefetch>
                <Button type="primary">
                  Acessar minha API GET via Axios !
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Card>
      )}
    </div>
  );
}
