import { Alert, H2, P } from "@interlay/ui";
import { Layout } from "./components";
import { Inscriptions } from "./components/Inscriptions/Inscriptions";
import { useBtcSnap } from "./hooks/useBtcSnap";
import { useGetInscriptionIds } from "./hooks/useGetInscriptionIds";
import { StyledOrdinalsList } from "./components/Layout/Layout.styles";
import "./utils/yup.custom";
import { useEffect } from "react";
import { DropDownForm } from "./components/component/drop-down-form";
import { DropDownFormEth } from "./components/component/drop-down-form-eth";

const App = () => {
  const { bitcoinAddress } = useBtcSnap();
  const { inscriptionIds, refetch } = useGetInscriptionIds(bitcoinAddress);

  useEffect(() => {
    if (!bitcoinAddress) return;

    refetch();
  }, [bitcoinAddress]);

  return (
    <Layout>
      <StyledOrdinalsList gap="spacing4" direction="column">
        <Alert status="warning">
          This demo uses experimental technology and can only be used with{" "}
          <a href="https://metamask.io/flask/" rel="noopener noreferrer" target="_blank">
            Metamask Flask
          </a>
          . Please{" "}
          <a
            href="https://github.com/rashadalh/tBTC-Bridge-MonoRepo"
            rel="noopener noreferrer"
            target="_blank"
          >
            see the documentation
          </a>{" "}
          for more information.
        </Alert>
        <H2>Ordinals portfolio</H2>

        {inscriptionIds?.length ? (
          <Inscriptions inscriptionIds={inscriptionIds} />
        ) : (
          <P>No ordinals yet</P>
        )}
        <DropDownForm />
        <DropDownFormEth />
      </StyledOrdinalsList>
    </Layout>
  );
};

export default App;
