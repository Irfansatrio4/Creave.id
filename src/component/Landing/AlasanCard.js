import React from "react";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";

export default function AlasanCard({ title, children }) {
  return (
    <div className="w-80 flex justify-center text-justify">
      <Card>
        <CardBody>
          <H6 color="gray">{title}</H6>
          <Paragraph color="blueGray">{children}</Paragraph>
        </CardBody>
      </Card>
    </div>
  );
}
