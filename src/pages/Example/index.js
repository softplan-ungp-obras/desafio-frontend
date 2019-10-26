import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistActions } from '~/store/ducks/playlists';
import { Container } from './styles';

class Example extends React.Component {
  componentDidMount() {}
  // static propTypes = {
  //   getPlaylistsRequest: PropTypes.func.isRequired,
  //   playlists: PropTypes.shape({
  //     data: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.number,
  //         title: PropTypes.string,
  //         description: PropTypes.string,
  //         thumbnail: PropTypes.string,
  //       }),
  //     ),
  //     loading: PropTypes.bool,
  //   }).isRequired,
  // };

  render() {
    return (
      <Container>
        <h1>Boilerplate React by Wellington Garcia</h1>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
